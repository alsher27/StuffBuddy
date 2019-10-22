using StuffBuddy.DAL.Entities;

namespace StuffBuddy.Business.Models
{
    public class DeviceModel
    {
        public int Id { get; set; }
        public DeviceType Type { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }
        public float Price { get; set; }
        public float Rating { get; set; }
    }
}