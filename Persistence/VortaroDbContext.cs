using EsperantaVortaro.Persistence.Entities;
using Microsoft.EntityFrameworkCore;

namespace EsperantaVortaro.Persistence;

public class VortaroDbContext : DbContext
{
    public VortaroDbContext(DbContextOptions<VortaroDbContext> options)
        : base(options) { }

    public DbSet<Vortaro> Vortaro { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}
