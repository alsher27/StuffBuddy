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
        private readonly IDeviceService deviceService;

        public DeviceController(IDeviceService _deviceService)
        {
            this.deviceService = _deviceService;
        }

        [HttpPost]
        [Route("get")]
        public async Task<IActionResult> GetDevice([FromBody] int id)
        {
            var device = await this.deviceService.GetDevice(id);
            return new JsonResult(device);
        }
        
        [HttpPost]
        [Route("create")]
        public async Task<IActionResult> CreateDevice([FromBody] DeviceModel deviceModel)
        {
            var createdDevice = await this.deviceService.CreateDevice(deviceModel, User.FindFirstValue(ClaimTypes.NameIdentifier));
            return new JsonResult(createdDevice);
        }
        
        [HttpPost]
        [Route("delete")]
        public async Task<IActionResult> DeleteDevice([FromBody] int id)
        {
            await this.deviceService.DeleteDevice(id);
            return new OkResult();
        }
        
        [HttpPost]
        [Route("update")]
        public async Task<IActionResult> UpdateDevice([FromBody]DeviceModel deviceModel)
        {
            var device = await this.deviceService.GetDevice(deviceModel.Id);
            if(device == null) return new JsonResult(new {Error = "Device not found"});
            
            deviceModel.Id = device.Id;
            await this.deviceService.UpdateDevice(deviceModel);
            
            return new OkResult();
        }
        
        [HttpGet]
        [AllowAnonymous]
        [Route("search")]
        public async Task<List<DeviceModel>> SearchDevice([FromBody]DeviceSearchModel searchModel)
        {
            return await this.deviceService.SearchDevice(searchModel); 
        }
    }
}