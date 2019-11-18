using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StuffBuddy.Business.Models;
using StuffBuddy.Business.Services;

namespace StuffBuddy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ReviewController : Controller
    {
        private readonly IReviewService _reviewService;

        public ReviewController(IReviewService reviewService)
        {
            this._reviewService = reviewService;
        }

        [HttpPost]
        [Route("create")]
        public async Task<ReviewModel> CreateReview([FromBody]ReviewModel reviewModel)
        {
            reviewModel.CreatorId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            var review = await this._reviewService.CreateReview(reviewModel);
            return review;
        }
        
        [HttpPost]
        [Route("remove")]
        public async Task<IActionResult> RemoveReview([FromBody]int id)
        {
            await this._reviewService.RemoveReview(id);
            return new OkResult();
        }
        
        [HttpPost]
        [Route("update")]
        public async Task<IActionResult> UpdateReview(ReviewModel reviewModel)
        {
            await this._reviewService.UpdateReview(reviewModel);
            return new OkResult();
        }
        
        [HttpPost]
        [Route("reviewsfordevice")]
        public async Task<List<ReviewModel>> GetReviewsForDevice([FromBody]int deviceId)
        {
            return await this._reviewService.GetReviewsForDevice(deviceId);
        }
    }
}