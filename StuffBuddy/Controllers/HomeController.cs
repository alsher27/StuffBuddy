using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StuffBuddy.DAL;

namespace StuffBuddy.Controllers
{
    public class HomeController : Controller
    {
        public HomeController(Context context)
        {
        }

        public IActionResult Index()
        {
            return View();
        }
    }
    
}
