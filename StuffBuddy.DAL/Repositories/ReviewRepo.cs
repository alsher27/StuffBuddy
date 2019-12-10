using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using StuffBuddy.DAL.Entities;

namespace StuffBuddy.DAL.Repositories
{
    public class ReviewRepo : RepositoryBase, IReviewRepo
    {
        private readonly IDeviceRepo _deviceRepo;

        public ReviewRepo(Context context, IDeviceRepo deviceRepo) : base(context)
        {
            this._deviceRepo = deviceRepo;
        }

        public async Task<Review> GetReview(int id)
        {
            return await this._context.Reviews.FindAsync(id);
        }

        public async Task<Review> CreateReview(Review review)
        {
            //review.Creator = await this._context.Users.FirstAsync(u => u.Id == review.UserID);
            var entry = await this._context.Reviews.AddAsync(review);
            var device = await this._context.Devices.FirstAsync(d=>d.Id == review.DeviceId);
            device.TotalRate += review.Rating;
            device.TotalReviews++;
            await this._context.SaveChangesAsync();
            return entry.Entity;
        }

        public async Task UpdateReview(Review upd)
        {
            var review = await this._context.Reviews.FirstAsync(r => r.Id == upd.Id);
            review.Text = upd.Text;
            review.Rating = upd.Rating;
            await _context.SaveChangesAsync();
        }

        public async Task RemoveReview(int id)
        {
            var review = await this._context.Reviews.FirstAsync(r => r.Id == id);
            this._context.Reviews.Remove(review);
            await this._context.SaveChangesAsync();
        }

        public async Task<List<Review>> GetReviewsForDevice(int deviceId)
        {
            return await this._context.Reviews.Where(r=>r.DeviceId == deviceId).ToListAsync();
        }
    }
}