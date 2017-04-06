using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;
using WebPhotographerKrupin.Models;

namespace WebPhotographerKrupin.Helpers
{
    public static class PagingHelpers
    {
        public static MvcHtmlString PageLinkPrev(this HtmlHelper html, PageInfo pageInfo, Func<int, string> pageUrl)
        {
            StringBuilder result = new StringBuilder();


            TagBuilder tag1 = new TagBuilder("a");
            tag1.MergeAttribute("href", pageUrl(pageInfo.PageNumber - 1));
            
            // если текущая страница, то выделяем ее,
            // например, добавляя класс
            if (2 > pageInfo.PageNumber)
            {
                TagBuilder tag = new TagBuilder("div");
                tag.AddCssClass("disabled");
                tag.InnerHtml = tag1.ToString();
                result.Append(tag.ToString());

            }
            else
            {
                result.Append(tag1.ToString());
            }
            return MvcHtmlString.Create(result.ToString());
        }

            public static MvcHtmlString PageLinksNext(this HtmlHelper html, PageInfo pageInfo, Func<int, string> pageUrl)
        {
            StringBuilder result = new StringBuilder();
            TagBuilder tag2 = new TagBuilder("a");
            tag2.MergeAttribute("href", pageUrl(pageInfo.PageNumber + 1));
          
            // если текущая страница, то выделяем ее,
            // например, добавляя класс
            if (pageInfo.TotalPages < pageInfo.PageNumber + 1)
            {
                TagBuilder tag = new TagBuilder("div");
                tag.AddCssClass("disabled");
                tag.InnerHtml = tag2.ToString();
                result.Append(tag.ToString());

            }
            else {
                result.Append(tag2.ToString());
            }

            return MvcHtmlString.Create(result.ToString());
        }
    }

}