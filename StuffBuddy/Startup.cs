using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using StuffBuddy.Business;
using StuffBuddy.Business.Services;
using StuffBuddy.DAL;
using StuffBuddy.DAL.Entities;
using StuffBuddy.DAL.Repositories;
using StuffBuddy.Hubs;
using Swashbuckle.AspNetCore.Swagger;

namespace StuffBuddy
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            this.Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            services.AddAutoMapper(typeof(Startup));
            
            services.AddDbContext<Context>(options =>
                options.UseSqlite(Configuration.GetConnectionString("Default")));

            services.AddScoped<IDeviceRepo, DeviceRepo>();
            services.AddScoped<IDeviceService, DeviceService>();
            
            services.AddScoped<IReviewService, ReviewService>();
            services.AddScoped<IReviewRepo, ReviewRepo>(); 
            
            services.AddScoped<IOrderRepo, OrderRepo>();
            services.AddScoped<IOrderService, OrderService>();

            services.AddIdentity<User, IdentityRole>()
                .AddEntityFrameworkStores<Context>();
            
            services.AddCors(o => o.AddPolicy("any", builder =>
            {
                builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
            }));
            
            services.Configure<IdentityOptions>(options =>
            {
                options.Password.RequireDigit = false;
                options.Password.RequiredLength = 8;
                options.Password.RequireLowercase = true;
                options.Password.RequireUppercase = false;
                options.Password.RequireNonAlphanumeric = false;
            });

            services.AddSignalR();
            
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "My API", Version = "v1" });
            });
            return services.BuildServiceProvider();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, IServiceProvider serviceProvider)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions()
                {
                    HotModuleReplacement = true,
                
                });
            }
            else
            {
                app.UseHsts();
            }
            app.UseAuthentication();
            app.UseStaticFiles();
            app.UseHttpsRedirection();

            app.UseSignalR(routes =>
            {
                routes.MapHub<NotificationsHub>("/notifications");
            });
            
            app.UseCors("any");
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
                routes.MapRoute(
                    name: "DefaultApi",
                    template: "api/{controller}/{action}/{id?}");
            });
            
            app.UseSwagger();

            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.),
            // specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
                //c.RoutePrefix = "swagger";
            });
            
            this.EnsureRoles(serviceProvider).Wait();
        }
        
        private async Task EnsureRoles(IServiceProvider serviceProvider)
        {
            var cfg = this.Configuration.GetSection("AdminSettings");
            //initializing custom roles 
            var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            var userManager = serviceProvider.GetRequiredService<UserManager<User>>();
            string[] roleNames = { "admin", "user" };

            foreach (var roleName in roleNames)
            {
                var roleExist = await roleManager.RoleExistsAsync(roleName);
                if (!roleExist)
                    await roleManager.CreateAsync(new IdentityRole(roleName));
                
            }
            
            var superUser = new User
            {
                UserName = cfg.GetValue<string>("Name"),
                Email = cfg.GetValue<string>("Email"),
            };
            var userPwd = cfg.GetValue<string>("Password");
            var user = await userManager.FindByEmailAsync(cfg.GetValue<string>("Email"));

            if(user == null)
            {
                var result = await userManager.CreateAsync(superUser, userPwd);
                if (result.Succeeded)
                    await userManager.AddToRoleAsync(superUser, "Admin");
                
            }
        }
    }
}
