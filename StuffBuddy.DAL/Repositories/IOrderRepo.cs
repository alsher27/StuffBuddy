using System.Collections.Generic;
using System.Threading.Tasks;
using StuffBuddy.DAL.Entities;

namespace StuffBuddy.DAL.Repositories
{
    public interface IOrderRepo
    {
        Task<Order> CreateOrder(Order order);
        Task RemoveOrder(int id);
        Task UpdateOrder(Order orderModel);
        Task<List<Order>> GetOrdersOfDevice(int deviceId);
        Task<List<Order>> GetUserOrders(string userId);
    }
}