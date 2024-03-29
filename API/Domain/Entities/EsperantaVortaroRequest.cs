using System.ComponentModel.DataAnnotations;

namespace EsperantaVortaro.Domain.Entities;

public class EsperantaVortaroRequest
{
    [Required]
    public Dictionary<string, string>? Entry { get; set; }
}
