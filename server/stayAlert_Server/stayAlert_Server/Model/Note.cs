using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace stayAlert_Server.Model
{
    public partial class Note
    {
        public int NoteId { get; set; }
        public int? ArticleId { get; set; }
        [Required]
        [Column(TypeName = "text")]
        public string NoteContent { get; set; }

        [ForeignKey("ArticleId")]
        [InverseProperty("Note")]
        public virtual Article Article { get; set; }
    }
}
