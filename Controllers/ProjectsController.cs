using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Capstone.Models;

namespace Capstone.Controllers
{
    [ApiController]
    [Route("/project")]
    public class ProjectsController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public ProjectsController(DatabaseContext context)
        {
            _context = context;
        }

        // Get all Projects
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Project>>> GetProjects(string filter)
        {
            if (filter == null)
            {
                return await _context.Projects.OrderBy(project => project.Id).ToListAsync();
            }
            else
            {
                return await _context.Projects.OrderBy(ProjectsController => project.Id).Where(ProjectsController => project.Title.Contains(filter)).ToListAsync();
            }
        }

        // Get Project by Title
        [HttpGet("{Title}")]
        public async Task<ActionResult<Project>> GetProject(string Title)
        {
            var project = await _context.Projects.Where(project => project.Title == Title).FirstOrDefaultAsync();

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

            _context.Entry(project).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProjectExists(Title))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(project);
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