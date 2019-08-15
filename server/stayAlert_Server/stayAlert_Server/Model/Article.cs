using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace stayAlert_Server.Model
{
    public partial class Article
    {
        public Article()
        {
            Note = new HashSet<Note>();
        }

        public int ArticleId { get; set; }
        [Required]
        [StringLength(255)]
        public string ArticleTitle { get; set; }
        [Required]
        [Column("WebURL")]
        [StringLength(255)]
        public string WebUrl { get; set; }
        [StringLength(255)]
        public string Author { get; set; }
        [Required]
        [Column("ThumbnailURL")]
        [StringLength(255)]
        public string ThumbnailUrl { get; set; }
        [Required]
        [Column(TypeName = "text")]
        public string ArticleContent { get; set; }
        [Required]
        [Column(TypeName = "text")]
        public string ArticleDescription { get; set; }
        [Column(TypeName = "date")]
        public DateTime? PublishedDate { get; set; }
        [Column("isFavourite")]
        public bool IsFavourite { get; set; }

        [InverseProperty("Article")]
        public virtual ICollection<Note> Note { get; set; }
    }
}
