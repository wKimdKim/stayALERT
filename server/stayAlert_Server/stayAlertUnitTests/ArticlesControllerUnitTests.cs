using System;
using System.Collections.Generic;
using System.Text;
using stayAlert_Server.Controllers;
using stayAlert_Server.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Linq;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;

namespace stayAlertUnitTests
{
    class ArticlesControllerUnitTests
    {
        public static readonly DbContextOptions<stayAlertContext>options
            = new DbContextOptions<stayAlertContext>()
            .UseInMemoryDatabase()
    }
}
