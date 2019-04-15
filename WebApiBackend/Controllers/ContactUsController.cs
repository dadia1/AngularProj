using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApiBackend.Models;

namespace WebApiBackend.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ContactUsController : ApiController
    {
        // GET: api/ContactUs
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }


        // POST: api/ContactUs
        public IHttpActionResult Post([FromBody]ContactUs clientDetails)
        {
            SqlConnection con =
                new SqlConnection(@"Data Source=DADIA-PC\SQLEXPRESS;Initial Catalog=ShowsData;Integrated Security=True");
            con.Open();
            SqlCommand com = new SqlCommand("INSERT INTO ContactUs " + "(FirstName,LastName,Email,Comment) " +
                "" + " VALUES(" + "'" + clientDetails.FirstName + "', '" + clientDetails.LastName + "','"
                + clientDetails.Email + "','" + clientDetails.Comment + "'" + ")", con);
            com.ExecuteNonQuery();
            con.Close();
            return Ok("Success");
        }
    }
}

