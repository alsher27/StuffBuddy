using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using StuffBuddy.DAL.Entities;

namespace StuffBuddy.DAL.Repositories
{
    public class OrderRepo : RepositoryBase, IOrderRepo 
    {
        public OrderRepo(Context context) : base(context)
        {}
        
        public async Task<Order> CreateOrder(Order order)
        {
            var entry = await this._context.Orders.AddAsync(order);
            await this._context.SaveChangesAsync();
            return entry.Entity;
        }

        public async Task RemoveOrder(int id)
        {
            var order = await this._context.Orders.FirstAsync(o=>o.Id == id);
            this._context.Remove(order);
            await this._context.SaveChangesAsync();
        }

        public async Task UpdateOrder(Order order)
        {
            var toChange = await this._context.Orders.FirstAsync(o => o.Id == order.Id);
            toChange.DateEnd = order.DateEnd;
            await this._context.SaveChangesAsync();
        }

        public async Task<List<Order>> GetOrdersOfDevice(int deviceId)
        {
            return await this._context.Orders.Where(o => o.Device.Id == deviceId).ToListAsync();
        }

        public async Task<List<Order>> GetUserOrders(string userId)
        {
            return (await this._context.Users.FirstAsync(u => u.Id == userId)).Orders;
        }

        public async Task<Order> GetOrder(int id)    
        {
            return await this._context.Orders.FirstAsync(o => o.Id == id);
        }
    }
}