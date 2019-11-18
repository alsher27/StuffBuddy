using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using StuffBuddy.Business.Models;
using StuffBuddy.DAL.Entities;
using StuffBuddy.DAL.Repositories;

namespace StuffBuddy.Business.Services
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepo _orderRepo;
        private readonly IMapper mapper;

        public OrderService(IOrderRepo orderRepo, IMapper mapper)
        {
            this._orderRepo = orderRepo;
            this.mapper = mapper;
        }
        public async Task<OrderModel> CreateOrder(OrderModel orderModel)
        {
            return mapper.Map<Order, OrderModel>(await this._orderRepo.CreateOrder(mapper.Map<OrderModel, Order>(orderModel)));
        }

        public async Task RemoveOrder(int id)
        {
            await this._orderRepo.RemoveOrder(id);
        }

        public async Task UpdateOrder(OrderModel orderModel)
        {
            await this._orderRepo.UpdateOrder(mapper.Map<OrderModel, Order>(orderModel));
        }

        public async Task<List<OrderModel>> GetOrdersOfDevice(int deviceId)
        {
            return mapper.Map<List<Order>, List<OrderModel>>(await this._orderRepo.GetOrdersOfDevice(deviceId));
        }

        public async Task<List<OrderModel>> GetUserOrders(string userId)
        {
            return mapper.Map<List<Order>, List<OrderModel>>(await this._orderRepo.GetUserOrders(userId));
        }
    }
}