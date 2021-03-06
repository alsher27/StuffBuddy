using System;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using StuffBuddy.DAL.Entities;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace StuffBuddy.DAL.Repositories
{
    public class DeviceRepo : RepositoryBase, IDeviceRepo
    {
        public DeviceRepo(Context context) : base(context)
        {
        }
        
        public async Task<Device> GetDevice(int id)
        {
            return await this._context.Devices.FindAsync(id);
        }

        public async Task<EntityEntry<Device>> CreateDevice(Device device)
        {
           var dev =  await this._context.Devices.AddAsync(device);
           await this._context.SaveChangesAsync();
           return dev;
        }

        public async Task UpdateDevice(Device device)
        {
            var deviceToModify = await this.GetDevice(device.Id);
            deviceToModify.Name = device.Name;
            deviceToModify.Price = device.Price;
            deviceToModify.Description = device.Description;
            deviceToModify.Type = deviceToModify.Type;
            await this._context.SaveChangesAsync();
        }

        public async Task<List<Device>> SearchDevices(List<Func<Device, bool>> filters)
        {
            // Try it out
            var output = this._context.Devices.Where(d=>filters.All(f=>f(d)));
            
//            foreach (var filter in filters)
//            {
//                output = output.Where(filter);
//            }

            return await output.ToListAsync();
        }

        public async Task RemoveDevice(int id)
        {
            var device = await this.GetDevice(id);
            this._context.Devices.Remove(device);
            await this._context.SaveChangesAsync();
        }

        public Task<List<Device>> GetDevices(int count, int page)
        {
            return this._context.Devices.Skip(page * count).Take(count).ToListAsync();
        }

        public async Task<List<Device>> GetDevicesOwnedBy(string userId)
        {
            return await this._context.Devices.Where(d => d.UserID == userId).ToListAsync();
        }

        public Task<List<Device>> GetDevicesOwnedBy(User user)
        {
            return this._context.Devices.Where(d => d.UserID == user.Id).ToListAsync();
        }

        public Task<List<Device>> GetDevicesOfType(DeviceType type)
        {
            return this._context.Devices.Where(d => d.Type == type).ToListAsync();
        }
    }
}