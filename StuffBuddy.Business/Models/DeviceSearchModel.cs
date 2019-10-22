using StuffBuddy.DAL.Entities;

namespace StuffBuddy.Business.Models
{
    public class DeviceSearchModel
    {
        public int? Id { get; set; }
        public string Text { get; set; }
        public DeviceType Type { get; set; }
        public int? FromPrice { get; set; }
        public int? ToPrice { get; set; }
        
    }
}