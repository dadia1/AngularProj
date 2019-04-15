using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using WebApiBackend;

namespace WebApiBackend.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class MovieListsController : ApiController
    {
        // GET: api/MovieLists
        public DataSet GetMovieLists()
        {
            DataTable moviesList, listHalls, movie2Hall;

            using (var client = new SqlConnection(@"Data Source=DADIA-PC\SQLEXPRESS;Initial Catalog=ShowsData;Integrated Security=True"))
            {
                moviesList = new DataTable();
                moviesList.TableName = "MovieListTable";

                listHalls = new DataTable();
                listHalls.TableName = "ListHallsTable";

                movie2Hall = new DataTable();
                movie2Hall.TableName = "Movie2HallTable";

                client.Open();

                SqlCommand cmd1 = new SqlCommand("SELECT * FROM MovieList", client);
                SqlCommand cmd2 = new SqlCommand("SELECT * FROM ListHalls", client);
                SqlCommand cmd3 = new SqlCommand("SELECT * FROM Movie2Hall", client);

                SqlDataAdapter adapter1 = new SqlDataAdapter(cmd1);
                SqlDataAdapter adapter2 = new SqlDataAdapter(cmd2);
                SqlDataAdapter adapter3 = new SqlDataAdapter(cmd3);

                adapter1.Fill(moviesList);
                adapter2.Fill(listHalls);
                adapter3.Fill(movie2Hall);
            }

            DataSet ds = new DataSet();
            ds.Tables.Add(moviesList);
            ds.Tables.Add(listHalls);
            ds.Tables.Add(movie2Hall);
            return ds;
        }
    }
}