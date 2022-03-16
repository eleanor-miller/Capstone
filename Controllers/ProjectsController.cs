using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Capstone.Models;

namespace Capstone.Controllers
{
    [ApiController]
    [Route("/api/Projects")]
    public class ProjectsController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public ProjectsController(DatabaseContext context)
        {
            _context = context;
        }

        // Get all Projects
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Project>>> GetProjects(string Title)
        {
            return await _context.Projects.ToListAsync();
        }

        // Get Project by Title
        [HttpGet("{Title}")]
        public async Task<ActionResult<Project>> GetProject(string Title)
        {
            var project = await _context.Projects.FirstOrDefaultAsync();

            if (project == null)
            {
                return NotFound($"{Title} not found.");
            }
            return project;
        }

        // Update Project by Title
        [HttpPut("{Title}")]
        public async Task<IActionResult> PutProject(string Title, Project project)
        {
            if (Title != project.Title)
            {
                return BadRequest();
            }

            await _context.SaveChangesAsync();
            {
                return Ok(project);
            }
        }


        // Create Project
        [HttpPost]
        public async Task<ActionResult<Project>> PostProject(Project project)
        {
            if (project.Title.Length < 1)
            {
                return BadRequest("Your project needs a title!");
            }
            _context.Projects.Add(project);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProject", new { Title = project.Title }, project);
        }

        // Delete Project
        [HttpDelete("{Title}")]
        public async Task<ActionResult<Project>> DeleteProject(string Title)
        {
            var project = await _context.Projects.FindAsync(Title);

            if (project == null)
            {
                return NotFound($"{Title} not found.");
            }
            _context.Projects.Remove(project);
            await _context.SaveChangesAsync();

            return Ok(project);
        }

    }
}