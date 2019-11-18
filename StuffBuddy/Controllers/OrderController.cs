using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StuffBuddy.Business.Models;
using StuffBuddy.Business.Services;

namespace StuffBuddy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class OrderController : Controller
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            this._orderService = orderService;
        }

        [HttpPost]
        [Route("create")]
        public async Task<OrderModel> CreateOrder([FromBody]OrderModel reviewModel)
        {
            return await this._orderService.CreateOrder(reviewModel);
        }
        
        [HttpPost]
        [Route("remove")]
        public async Task<IActionResult> Removeorder([FromBody]int id)
        {
            await this._orderService.RemoveOrder(id);
            return new OkResult();
        }
        
        [HttpPost]
        [Route("update")]
        public async Task<IActionResult> Updateorder(OrderModel orderModel)
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