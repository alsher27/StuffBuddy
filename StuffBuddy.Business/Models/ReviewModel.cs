namespace StuffBuddy.Business.Models
{
    public class ReviewModel
    {
        public int Id { get; set; }
        public int Rating { get; set; }
        public string Text { get; set; }
        public string CreatorId { get; set; }
        public int DeviceId { get; set; }
    }
}