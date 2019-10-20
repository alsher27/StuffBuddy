using System.ComponentModel.DataAnnotations.Schema;

namespace StuffBuddy.DAL.Entities
{
    public class Device
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public float Rating { get; set; }
        public float Price { get; set; }

        public string UserID { get; set; }
        [ForeignKey(nameof(UserID))]
        public User Owner { get; set; }
        
    }
}