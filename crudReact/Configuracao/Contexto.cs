using crudReact.Model;
using Microsoft.EntityFrameworkCore;

namespace crudReact.Configuracao {
    public class Contexto : DbContext
    {
        public Contexto(DbContextOptions<Contexto> options) : base(options) 
        {
            Database.EnsureCreated();
        }
        public DbSet<Produto> Produto { get; set; }
    }
}
