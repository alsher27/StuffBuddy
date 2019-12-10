using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using StuffBuddy.Business.Models;
using StuffBuddy.Business.Services;
using StuffBuddy.DAL.Entities;

namespace StuffBuddy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ReviewController : Controller
    {
        private readonly IReviewService _reviewService;
        private readonly UserManager<User> _userManager;

        public ReviewController(IReviewService reviewService, UserManager<User> userManager)
        {
            this._reviewService = reviewService;
            this._userManager = userManager;
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
        [Route("delete")]
        public async Task<IActionResult> RemoveReview([FromBody]int id)
        {
            if (!(await this.CanManipulateReview(id))) return new BadRequestObjectResult("You cant delete this review");
            await this._reviewService.RemoveReview(id);
            return new OkResult();
        }

        private async Task<bool> CanManipulateReview(int id)
        {
            var user = await this._userManager.GetUserAsync(this.User);
            var roles = await this._userManager.GetRolesAsync(user);
            var review = await this._reviewService.GetReview(id);
            return review.CreatorId != user.Id && !roles.Contains("admin");
        }

        [HttpPost]
        [Route("update")]
        public async Task<IActionResult> UpdateReview(ReviewModel reviewModel)
        {
            if (!(await this.CanManipulateReview(reviewModel.Id))) 
                return new BadRequestObjectResult("You cant update this review");
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