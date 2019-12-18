using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using StuffBuddy.DAL.Entities;

namespace StuffBuddy.Hubs
{
    [Authorize]
    public class NotificationsHub : Hub
    {
        public NotificationsHub()
        {
            
        }                                        
    }
}