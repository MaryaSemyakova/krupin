using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace WebPhotographerKrupin.Models
{
    public class PhotographerContext : DbContext
    {

        public PhotographerContext() : base("PhotographerContext")
        {
            Database.SetInitializer(new PhotographerInitializer());

        }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Opinion> Opinions { get; set; }


    }

    public class PhotographerInitializer : System.Data.Entity.CreateDatabaseIfNotExists<PhotographerContext>
    {
        protected override void Seed(PhotographerContext db)
        {
            var photos = new List<Photo>
            {
                new Photo{
                    PhotoID=1,
                    PhotoUrl="1.jpg",
                    GroupType=PhotoGroupType.portrait
                },
                new Photo{
                    PhotoID=2,
                    PhotoUrl="2.jpg",
                    GroupType=PhotoGroupType.portrait
                },
                new Photo{
                    PhotoID=3,
                    PhotoUrl="3.jpg",
                    GroupType=PhotoGroupType.portrait
                },
                new Photo{
                    PhotoID=4,
                    PhotoUrl="4.jpg",
                    GroupType=PhotoGroupType.portrait
                },
                new Photo{
                    PhotoID=5,
                    PhotoUrl="5.jpg",
                    GroupType=PhotoGroupType.portrait
                },
                new Photo{
                    PhotoID=6,
                    PhotoUrl="DSC2002.jpg",
                    GroupType=PhotoGroupType.nature
                },
                new Photo{
                    PhotoID=7,
                    PhotoUrl="DSC2223.jpg",
                    GroupType=PhotoGroupType.nature
                },
                new Photo{
                    PhotoID=8,
                    PhotoUrl="DSC2271.jpg",
                    GroupType=PhotoGroupType.nature
                },
                new Photo{
                    PhotoID=9,
                    PhotoUrl="DSC2922.jpg",
                    GroupType=PhotoGroupType.nature
                }

            };

            photos.ForEach(s => db.Photos.Add(s));

            db.SaveChanges();
            
        }
    }
}