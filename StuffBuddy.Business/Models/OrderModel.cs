using System;
using System.ComponentModel.DataAnnotations.Schema;
using StuffBuddy.DAL.Entities;

namespace StuffBuddy.Business.Models
{
    public class OrderModel
    {
        public Device Device { get; set; }
        public DateTime DateStart { get; set; }
        public DateTime DateEnd { get; set; }
        public float Total { get; set; }
        
        public string UserID { get; set; }
        [ForeignKey(nameof(UserID))]
        public User Owner { get; set; }
    }
}