using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using StuffBuddy.Business.Models;
using StuffBuddy.DAL.Entities;

namespace StuffBuddy.Business.Services
{
    public interface IReviewService
    {
        Task<ReviewModel> GetReview(int id);
        Task UpdateReview(ReviewModel reviewModel);
        Task<ReviewModel> CreateReview(ReviewModel reviewModel);
        Task RemoveReview(int id);
        Task<List<ReviewModel>> GetReviewsForDevice(int deviceId);
    }
}