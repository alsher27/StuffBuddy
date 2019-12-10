using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using StuffBuddy.Business.Models;
using StuffBuddy.Business.Services;
using StuffBuddy.DAL.Entities;
using StuffBuddy.ViewModels;

namespace StuffBuddy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class DeviceController : Controller
    {
        private readonly IDeviceService _deviceService;
        private readonly UserManager<User> _userManager;

        public DeviceController(IDeviceService deviceService, UserManager<User> userManager)
        {
            this._deviceService = deviceService;
            this._userManager = userManager;
        }

        [HttpPost]
        [Route("get")]
        public async Task<IActionResult> GetDevice([FromBody] int id)
        {
            var device = await this._deviceService.GetDevice(id);
            return new JsonResult(device);
        }
        
        [HttpPost]
        [Route("create")]
        public async Task<IActionResult> CreateDevice([FromBody] DeviceModel deviceModel)
        {
            var createdDevice = await this._deviceService.CreateDevice(deviceModel, User.FindFirstValue(ClaimTypes.NameIdentifier));
            return new JsonResult(createdDevice);
        }
        
        [HttpPost]
        [Route("delete")]
        public async Task<IActionResult> DeleteDevice([FromBody] int id)
        {
            var user = await this._userManager.GetUserAsync(this.User);
            var roles = await this._userManager.GetRolesAsync(user);
            if (!user.OwnedDevices.Select(d => d.Id).Contains(id) && !roles.Contains("admin"))
                return new BadRequestObjectResult("You can't delete this device");
            await this._deviceService.DeleteDevice(id);
            return new OkResult();
        }
        
        [HttpPost]
        [Route("update")]
        public async Task<IActionResult> UpdateDevice([FromBody]DeviceModel deviceModel)
        {
            var user = await this._userManager.GetUserAsync(this.User);
            var roles = await this._userManager.GetRolesAsync(user);
            
            if (!user.OwnedDevices.Select(d => d.Id).Contains(deviceModel.Id) && !roles.Contains("admin"))
                return new BadRequestObjectResult("You can't delete this device");
            var device = await this._deviceService.GetDevice(deviceModel.Id);
            if(device == null) return new JsonResult(new {Error = "Device not found"});
            await this._deviceService.UpdateDevice(deviceModel);
            
            return new OkResult();
        }
        
        [HttpGet]
        [AllowAnonymous]
        [Route("search")]
        public async Task<List<DeviceModel>> SearchDevice([FromBody]DeviceSearchModel searchModel)
        {
            return await this._deviceService.SearchDevice(searchModel); 
        }
        [HttpGet]
        [AllowAnonymous]
        [Route("devicesOfUser")]
        public async Task<List<DeviceModel>> GetDevicesForUser([FromBody] string userId)
        {
            return await this._deviceService.GetDevicesForUser(userId); 
        }
        
        
    }
}