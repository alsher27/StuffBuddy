using System.Collections.Generic;
using System.Threading.Tasks;
using StuffBuddy.Business.Models;
using StuffBuddy.DAL.Entities;


namespace StuffBuddy.Business.Services
{
    public interface IDeviceService
    {
        Task<DeviceModel> CreateDevice(DeviceModel deviceModel, string userId);
        Task<DeviceModel> GetDevice(int deviceModelId);
        Task UpdateDevice(DeviceModel deviceModel);
        Task DeleteDevice(int id);
        Task<List<DeviceModel>> SearchDevice(DeviceSearchModel searchModel);
    }
}