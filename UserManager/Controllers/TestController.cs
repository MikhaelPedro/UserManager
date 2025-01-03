using Microsoft.AspNetCore.Mvc;

namespace UserManager.Controllers
{
    public class TestController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
