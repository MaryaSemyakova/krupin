using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebPhotographerKrupin.Models;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Net;
using System.IO;

namespace WebPhotographerKrupin.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        PhotographerContext db = new PhotographerContext();
        public ActionResult Index(int page = 1, int group = 1)
        {
            var photos = db.Photos.ToList();
            if (group != 0)
            {
                photos = photos.Where(s=>((int)s.GroupType == group)).ToList();
            }
            int pageSize = 4; // количество объектов на страницу
            IEnumerable<Photo> photoPerPages = photos.Skip((page - 1) * pageSize).Take(pageSize);
            PageInfo pageInfo = new PageInfo { PageNumber = page, PageSize = pageSize, TotalItems = photos.Count, PhotoGroup = (PhotoGroupType)group};
            IndexViewModel ivm = new IndexViewModel { PageInfo = pageInfo, Photos = photoPerPages };

            return View(ivm);
        }


        public ActionResult ReturnImage(string path)
        {
            try
            {
                var photos = Directory.GetFiles(Server.MapPath("~/App_Data/uploads"), path);
                string allPath = photos.FirstOrDefault();
                byte[] imageByteData = System.IO.File.ReadAllBytes(allPath);
                return File(imageByteData, "image/png");
            }
            catch (Exception e)
            {
                return null;
            }
        }

        [HttpPost]
        public ActionResult SendMessage(string Name, string Phone, string email, string message)
        {
            // отправитель - устанавливаем адрес и отображаемое в письме имя
            MailAddress from = new MailAddress("s.mashustik.m@outlook.com", Name);
            // кому отправляем
            MailAddress to = new MailAddress("KrupinGV@mail.ru");
            // создаем объект сообщения
            MailMessage m = new MailMessage(from, to);
            // тема письма
            m.Subject = "Заявка на фотосессию";
            // текст письма
            m.Body = "<p>Имя: " + Name + "</p>";
            m.Body += "<p>Телефон: " + Phone  + "</p>";
            m.Body += "<p>Элестронная почта:" + email + "</p>";
            m.Body += "<p>Сообщение:" + message + "</p>";

            // письмо представляет код html
            m.IsBodyHtml = true;
            // адрес smtp-сервера и порт, с которого будем отправлять письмо
            SmtpClient smtp = new SmtpClient("smtp-mail.outlook.com", 587);
            // логин и пароль
            smtp.Credentials = new NetworkCredential("s.mashustik.m@outlook.com", "1qasw23ed");
            smtp.EnableSsl = true;
            smtp.Send(m);
            return RedirectToAction("Index");
        }


    }
}