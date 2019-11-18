using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StuffBuddy.Business.Models;
using StuffBuddy.Business.Services;
using StuffBuddy.ViewModels;

namespace StuffBuddy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class DeviceController : Controller
    {
        private readonly IDeviceService _deviceService;

        public DeviceController(IDeviceService deviceService)
        {
            this._deviceService = deviceService;
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
            await this._deviceService.DeleteDevice(id);
            return new OkResult();
        }
        
        [HttpPost]
        [Route("update")]
        public async Task<IActionResult> UpdateDevice([FromBody]DeviceModel deviceModel)
        {
            var device = await this._deviceService.GetDevice(deviceModel.Id);
            if(device == null) return new JsonResult(new {Error = "Device not found"});
            
            deviceModel.Id = device.Id;
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