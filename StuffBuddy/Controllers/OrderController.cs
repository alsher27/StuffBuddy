using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using StuffBuddy.Business.Models;
using StuffBuddy.Business.Services;
using StuffBuddy.DAL.Entities;
using StuffBuddy.Hubs;

namespace StuffBuddy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class OrderController : Controller
    {
        private readonly IOrderService _orderService;
        private readonly UserManager<User> _userManager;
        private readonly IHubContext<NotificationsHub> _hubContext;

        public OrderController(IOrderService orderService, UserManager<User> userManager, IHubContext<NotificationsHub> hubContext)
        {
            this._orderService = orderService;
            this._userManager = userManager;
            this._hubContext = hubContext;
        }
        
        [HttpGet]
        [Route("get/{id}")]
        public async Task<IActionResult> GetOrder([FromQuery] int id)
        {
            
            var user = await this._userManager.GetUserAsync(this.User);
            var roles = await this._userManager.GetRolesAsync(user);
            var order = await this._orderService.GetOrder(id);

            if (order.Owner.Id != user.Id && !roles.Contains("admin"))
                return new BadRequestObjectResult("You are not allowed to watch this order");
            return new OkObjectResult(order);

        }


        [HttpPost]
        [Route("create")]
        public async Task<OrderModel> CreateOrder([FromBody]OrderModel orderModel)
        {
            orderModel.UserID = (await this._userManager.GetUserAsync(this.User)).Id;
            var order = await this._orderService.CreateOrder(orderModel);
            var clientProxy = this._hubContext.Clients.User(order.Device.Owner.Id);
            await clientProxy.SendAsync("onOrderCreated", order);
            return order;
        }
        
        [HttpPost]
        [Route("remove")]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> RemoveOrder([FromBody]int id)
        {
            await this._orderService.RemoveOrder(id);
            return new OkResult();
        }
        
        [HttpPost]
        [Route("update")]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> UpdateOrder(OrderModel orderModel)
        {
            await this._orderService.UpdateOrder(orderModel);
            return new OkResult();
        }
        
        [HttpPost]
        [Route("ordersOfDevice")]
        public async Task<List<OrderModel>> GetOrdersOfDevice([FromBody]int deviceId)
        {
            return await this._orderService.GetOrdersOfDevice(deviceId);
        }
        
        [HttpPost]
        [Route("userOrders")]
        public async Task<List<OrderModel>> GetUserOrders([FromBody]string userId)
        {
            return await this._orderService.GetUserOrders(userId);
        }
    }
}