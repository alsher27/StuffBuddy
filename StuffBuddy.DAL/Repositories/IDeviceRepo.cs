using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using StuffBuddy.DAL.Entities;

namespace StuffBuddy.DAL.Repositories
{
    public interface IDeviceRepo
    {
        Task<Device> GetDevice(int id);
        Task RemoveDevice(int id);
        
        Task<List<Device>> GetDevices(int count, int page);

        Task<List<Device>> GetDevicesOwnedBy(string userId);
        
        Task<List<Device>> GetDevicesOfType(DeviceType type);
        Task<EntityEntry<Device>> CreateDevice(Device device);
        Task UpdateDevice(Device device);
        Task<List<Device>> SearchDevices(List<Func<Device,bool>> filters);
    }
}