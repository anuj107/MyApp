using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MyApp.Controllers
{
    public class DetailsController : ApiController
    {
        [HttpPost]
        public String[] MyMethod(string name,string Role,string Email)
        {
            return new String[]
            {
                "Hello",
                "World"
            };
        }
    }
}
