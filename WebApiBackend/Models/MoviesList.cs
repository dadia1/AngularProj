using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApiBackend.Models
{
    public class MoviesList
    {
        public int ID { get; set; }
        public string MovieName { get; set; }
        public string MovieInformation { get; set; }
        public string DescriptionMovie { get; set; }
        public string Date { get; set; }
        public string Time { get; set; }
        public int HallNumber { get; set; }
        public int chairNumbers { get; set; }
        public double ScreenSize { get; set; }
        public string PicMovie { get; set; }
    }
}