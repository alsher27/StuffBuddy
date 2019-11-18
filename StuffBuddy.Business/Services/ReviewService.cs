using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using StuffBuddy.Business.Models;
using StuffBuddy.DAL.Entities;
using StuffBuddy.DAL.Repositories;

namespace StuffBuddy.Business.Services
{
    public class ReviewService : IReviewService
    {
        private readonly IReviewRepo _reviewRepo;
        private IMapper mapper;

        public ReviewService(IReviewRepo reviewRepo, IMapper mapper)
        {
            this._reviewRepo = reviewRepo;
            this.mapper = mapper;
        }
        
        public async Task UpdateReview(ReviewModel reviewModel)
        {
            await this._reviewRepo.UpdateReview(mapper.Map<ReviewModel, Review>(reviewModel));
        }

        public async Task<ReviewModel> CreateReview(ReviewModel reviewModel)
        {
            return mapper.Map<Review, ReviewModel>(await this._reviewRepo.CreateReview(mapper.Map<ReviewModel, Review>(reviewModel)));
        }

        public async Task RemoveReview(int id)
        {
            await this._reviewRepo.RemoveReview(id);
        }

        public async Task<List<ReviewModel>> GetReviewsForDevice(int deviceId)
        {
            return  mapper.Map<List<Review>, List<ReviewModel>>(await this._reviewRepo.GetReviewsForDevice(deviceId));
        }
    }
}