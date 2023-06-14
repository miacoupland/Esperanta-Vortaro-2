using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EsperantaVortaro.Persistence.Entities;

[Table("Vortaro")]
public class Vortaro
{
    [Key]
    [Column("vortaro_id")]
    public int Id { get; set; }

    [Required]
    [Column("angla")]
    public string Angla { get; set; }

    [Required]
    [Column("esperanto")]
    public string Esperanto { get; set; }
}
