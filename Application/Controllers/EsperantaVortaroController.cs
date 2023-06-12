using EsperantaVortaro.Persistence;
using EsperantaVortaro.Persistence.Entities;
using Microsoft.AspNetCore.Mvc;

namespace EsperantaVortaro.Application.Controllers;

[Route("api/[controller]")]
[ApiController]
public class EsperantaVortaroController : ControllerBase
{
    public EsperantaVortaroController(VortaroDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    private readonly VortaroDbContext _dbContext;

    /// <summary>
    /// Controller for adding a new entry to the dictionary
    /// </summary>
    /// <param name="entry">User requested entry</param>
    /// <returns>void</returns>
    [HttpPost("AddEntry")]
    public void AddEntry([FromBody] Dictionary<string, string> entry)
    {
        var newEntry = new Vortaro { Angla = entry["Angla"], Esperanto = entry["Esperanto"] };

        _dbContext.Vortaro.Add(newEntry);
        _dbContext.SaveChanges();
    }

    /// <summary>
    /// Controller for retrieving a dictionary entry
    /// </summary>
    /// <param name="entry">User requested entry</para,>
    /// <returns>Dictionary entry</returns>
    [HttpPost("GetEntry")]
    public Dictionary<string, string> GetEntry([FromBody] string word)
    {
        var entry = _dbContext.Vortaro.FirstOrDefault(v => v.Angla == word);

        if (entry != null)
        {
            var dictionary = new Dictionary<string, string>
            {
                { "Angla", entry.Angla},
                { "Esperanto", entry.Esperanto }
            };

            return dictionary;
        }
        
        return new Dictionary<string, string>();
    }
}
