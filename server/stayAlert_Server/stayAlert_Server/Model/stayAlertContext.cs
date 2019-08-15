using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace stayAlert_Server.Model
{
    public partial class stayAlertContext : DbContext
    {
        public stayAlertContext()
        {
        }

        public stayAlertContext(DbContextOptions<stayAlertContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Article> Article { get; set; }
        public virtual DbSet<Note> Note { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=tcp:stayalert.database.windows.net,1433;Initial Catalog=stayAlert;Persist Security Info=False;User ID=cybrus555;Password=Woosang3;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity<Article>(entity =>
            {
                entity.Property(e => e.ArticleTitle).IsUnicode(false);

                entity.Property(e => e.Author).IsUnicode(false);

                entity.Property(e => e.ThumbnailUrl).IsUnicode(false);

                entity.Property(e => e.WebUrl).IsUnicode(false);
            });

            modelBuilder.Entity<Note>(entity =>
            {
                entity.HasOne(d => d.Article)
                    .WithMany(p => p.Note)
                    .HasForeignKey(d => d.ArticleId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("ArticleId");
            });
        }
    }
}
