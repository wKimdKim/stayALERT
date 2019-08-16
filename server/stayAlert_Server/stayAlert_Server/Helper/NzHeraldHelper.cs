using System;
using System.Net.Http;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using stayAlert_Server.Model;

namespace stayAlert_Server.Helper
{
    public class NzHeraldHelper
    {
        readonly string _API_Key = "6880a1bbdda84dbc98eabaad04b11c7f";
        static HttpClient client = new HttpClient();
        public static async Task<Article> getArticles()
        {
            Article articles = null;
            HttpResponseMessage response = await client.GetAsync("https://newsapi.org/v2/top-headlines?country=nz&apiKey=6880a1bbdda84dbc98eabaad04b11c7f");
            if(response.IsSuccessStatusCode)
            {
                articles = await response.Content.ReadAsAsync<Article>();
            }
            return articles;

        }
    }
}
