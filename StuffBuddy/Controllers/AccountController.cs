using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using StuffBuddy.DAL.Entities;
using StuffBuddy.ViewModels;

namespace StuffBuddy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public AccountController(UserManager<User> userManager, SignInManager<User> signInManager, RoleManager<IdentityRole> roleManager)
        {
            this._userManager = userManager;
            this._signInManager = signInManager;
            this._roleManager = roleManager;
        }

        [HttpGet]
        [Route("getUsername")]
        public string GetUsername()
        {
            return User.Identity.Name;
        }
        
        [HttpGet]
        [Route("getRole")]
        public string GetRole()
        {
            return User.FindFirst(ClaimTypes.Role).Value;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] UserLoginModel model)
        {
            var user = await this._userManager.FindByEmailAsync(model.Email);
            var result = await _signInManager.PasswordSignInAsync(user, model.Password, 
                isPersistent: true, lockoutOnFailure: false);

            if (result.Succeeded)
                return new JsonResult(model.Email);
                
            return new UnauthorizedResult();
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] UserLoginModel model)
        {
            var user = new User { Email = model.Email, UserName = model.Email, FirstLastName = model.Name };

            var result = await _userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded) return new JsonResult(result.Errors);

            await _userManager.AddToRoleAsync(user, "user");

            await _signInManager.SignInAsync(user, true);
            var x = new { user.Email, model.Name};
            return new JsonResult(x);
        }

        [HttpGet]
        [Route("signout")]
        public new async void SignOut()
        {
            await _signInManager.SignOutAsync();
        }
    }
}