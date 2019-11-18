using System.ComponentModel.DataAnnotations;
using StuffBuddy.DAL.Entities;

namespace StuffBuddy.Business.Models
{
    public class DeviceSearchModel
    {
        public float? Rating { get; set; }
        [MinLength(3)]
        public string Text { get; set; }
        
        public DeviceType? Type { get; set; }
        public int? FromPrice { get; set; }
        public int? ToPrice { get; set; }
        
    }
}