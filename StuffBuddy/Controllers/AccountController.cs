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

        public AccountController(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpGet]
        [Route("getUsername")]
        public string GetUsername()
        {
            return User.Identity.Name;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] UserLoginModel model)
        {
            var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, 
                isPersistent: true, lockoutOnFailure: false);

            if (result.Succeeded)
                return new OkResult();
                
            return new UnauthorizedResult();
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] UserLoginModel model)
        {
            var user = new User {Email = model.Email, UserName = model.Email};

            var result = await _userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded) return new JsonResult(result.Errors);

            await _signInManager.SignInAsync(user, true);
            return new OkResult();
        }

        [HttpGet]
        [Route("signout")]
        public async void SignOut()
        {
            await _signInManager.SignOutAsync();
        }
    }
}