using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace StuffBuddy.DAL.Entities
{
    public class Order
    {
        public int Id { get; set; }
        public Device Device { get; set; }
        public DateTime DateStart { get; set; }
        public DateTime DateEnd { get; set; }
        public float Total { get; set; }
        
        public string UserID { get; set; }
        [ForeignKey(nameof(UserID))]
        public User Owner { get; set; }
    }
}