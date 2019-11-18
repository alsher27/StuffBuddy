using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using StuffBuddy.DAL.Entities;

namespace StuffBuddy.DAL
{
    public class Context : IdentityDbContext<User>
    {
        private readonly IConfiguration config;

        public DbSet<Device> Devices { get; set; }
        
        public DbSet<Order> Orders { get; set; }
        
        public DbSet<Review> Reviews { get; set; }

        public Context(DbContextOptions options, IConfiguration configuration) : base(options)
        {
            this.config = configuration;
            Database.Migrate();
        }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=StuffBuddy.db");
        }
    }
}
