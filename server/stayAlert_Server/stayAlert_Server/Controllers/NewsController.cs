using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;

namespace stayAlert_Server.Controllers
{
    //For retrieving data from newsapi
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        static readonly HttpClient client = new HttpClient();
        // GET: api/News
        [HttpGet]
        public async Task<string> Get()
        {
            string responseBody="";
            try
            {
                HttpResponseMessage response = await client.GetAsync("https://newsapi.org/v2/top-headlines?country=nz&apiKey=6880a1bbdda84dbc98eabaad04b11c7f");
                response.EnsureSuccessStatusCode();
                responseBody = await response.Content.ReadAsStringAsync();
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine("\nException Caught!");
                Console.WriteLine("Message :{0} ", e.Message);
            }
            return responseBody;
        }

        // GET: api/News/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/News
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/News/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
