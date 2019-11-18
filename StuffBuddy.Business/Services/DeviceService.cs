using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using StuffBuddy.Business.Models;
using StuffBuddy.DAL.Entities;
using StuffBuddy.DAL.Repositories;

namespace StuffBuddy.Business.Services
{
    public class DeviceService : IDeviceService
    {

        private readonly IDeviceRepo deviceRepo;
        private readonly IMapper mapper;
        
        public DeviceService(IDeviceRepo _deviceRepo, IMapper _mapper)
        {
            this.deviceRepo = _deviceRepo;
            this.mapper = _mapper;
        }

        public async Task<DeviceModel> CreateDevice(DeviceModel deviceModel, string userId)
        {
            var deviceDto = mapper.Map<DeviceModel, Device>(deviceModel);
            deviceDto.UserID = userId;
            var dev = await this.deviceRepo.CreateDevice(deviceDto);
            return mapper.Map<Device, DeviceModel>(dev.Entity);
        }

        public async Task<DeviceModel> GetDevice(int deviceModelId)
        {
            var device = await this.deviceRepo.GetDevice(deviceModelId);
            return this.mapper.Map<Device, DeviceModel>(device);
        }

        public async Task UpdateDevice(DeviceModel deviceModel)
        {
            await this.deviceRepo.UpdateDevice(this.mapper.Map<DeviceModel, Device>(deviceModel));
        }

        public async Task DeleteDevice(int id)
        {
            await this.deviceRepo.RemoveDevice(id);
        }

        public async Task<List<DeviceModel>> SearchDevice(DeviceSearchModel searchModel)
        {
            var filters = new List<Func<Device, bool>>();
            if (!string.IsNullOrEmpty(searchModel.Text))
                filters.Add(dev =>
                    dev.Name.ToLower().Contains(searchModel.Text.ToLower()) ||
                    dev.Description.ToLower().Contains(searchModel.Text.ToLower()));
                                   
            if(searchModel.FromPrice.HasValue)
                filters.Add(dev => dev.Price > searchModel.FromPrice.Value);
            
            if(searchModel.ToPrice.HasValue)
                filters.Add(dev => dev.Price < searchModel.ToPrice);
            
            if(searchModel.Rating.HasValue)
                filters.Add(dev => dev.TotalRate / dev.TotalReviews > searchModel.Rating);
            
            if(searchModel.Type.HasValue)
                filters.Add(dev => dev.Type == searchModel.Type.Value);

            return this.mapper.Map<List<Device>, List<DeviceModel>>(await this.deviceRepo.SearchDevices(filters));
        }

        public async Task<List<DeviceModel>> GetDevicesForUser(string userId)
        {
            return this.mapper.Map<List<Device>, List<DeviceModel>>(await this.deviceRepo.GetDevicesOwnedBy(userId));        
        }
    }
}