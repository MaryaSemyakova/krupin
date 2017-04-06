using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebPhotographerKrupin.Models
{
    public enum PhotoGroupType
    {
        nature = 1,
        portrait = 2
    }
    public class Photo
    {
        public int PhotoID { get; set; }
        public string PhotoUrl { get; set; }
        public PhotoGroupType GroupType { get; set; }
    }
    public class PageInfo
    {
        public int PageNumber { get; set; } // номер текущей страницы
        public int PageSize { get; set; } // кол-во объектов на странице
        public int TotalItems { get; set; } // всего объектов
        public int TotalPages  // всего страниц
        {
            get { return (int)Math.Ceiling((decimal)TotalItems / PageSize); }
        }
        public PhotoGroupType PhotoGroup { get; set; }
    }
    public class IndexViewModel
    {
        public IEnumerable<Photo> Photos { get; set; }
        public PageInfo PageInfo { get; set; }
    }
}