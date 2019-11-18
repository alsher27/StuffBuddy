using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using StuffBuddy.DAL.Entities;

namespace StuffBuddy.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = "admin")]
    public class AdminController : Controller
    {
        private readonly UserManager<User> _userManager;

        public AdminController(UserManager<User> userManager)
        {
            this._userManager = userManager;
        }
        
        [Route("users")]
        [HttpGet]
        public async Task<List<User>> GetAllUsers()
        {
            return (await this._userManager.GetUsersInRoleAsync("user")).ToList();
        }
    }
}