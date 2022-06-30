using System.ComponentModel.DataAnnotations.Schema;

namespace crudReact.Model {

    [Table("Produto")]
    public class Produto 
    {
        [Column("Id")]
        public int Id { get; set; }

        [Column("Descricao")]
        public string Descricao { get; set; }


    }
}
