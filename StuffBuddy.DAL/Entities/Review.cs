using System.ComponentModel.DataAnnotations.Schema;

namespace StuffBuddy.DAL.Entities
{
    public class Review
    {
        public int Id { get; set; }
        public int Rating { get; set; }
        public string Text { get; set; }
        
        public string UserID { get; set; }
        [ForeignKey(nameof(UserID))]
        public User Creator { get; set; }

        public int DeviceId { get; set; }
        
        [ForeignKey(nameof(DeviceId))]
        public Device Device { get; set; }
    }
}