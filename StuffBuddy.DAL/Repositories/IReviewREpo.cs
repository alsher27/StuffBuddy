using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using StuffBuddy.DAL.Entities;

namespace StuffBuddy.DAL.Repositories
{
    public interface IReviewRepo
    {
        Task<Review> CreateReview(Review map);
        Task UpdateReview(Review map);
        Task RemoveReview(int id);
        Task<List<Review>> GetReviewsForDevice(int deviceId);
    }
}