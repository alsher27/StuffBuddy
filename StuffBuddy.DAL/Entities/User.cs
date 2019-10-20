using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace StuffBuddy.DAL.Entities
{
    public class User : IdentityUser
    {
        public float Rating { get; set; }

        public List<Device> OwnedDevices { get; set; }

        public List<Order> Orders { get; set; }
    }
}
