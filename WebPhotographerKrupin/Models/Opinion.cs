using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebPhotographerKrupin.Models
{
    public class Opinion
    {
        public int OpinionId { get; set; }
        public string OpinionName { get; set; }
        public string OpinionMessage { get; set; }
        public string OpinionPhotoUrl { get; set; }
    }
}