using System.Collections.Generic;
using System.Threading.Tasks;
using StuffBuddy.Business.Models;

namespace StuffBuddy.Business.Services
{
    public interface IOrderService
    {
        Task<OrderModel> GetOrder(int id);
        Task<OrderModel> CreateOrder(OrderModel reviewModel);
        Task RemoveOrder(int id);
        Task UpdateOrder(OrderModel orderModel);
        Task<List<OrderModel>> GetOrdersOfDevice(int deviceId);
        Task<List<OrderModel>> GetUserOrders(string userId);
    }
}