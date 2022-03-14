using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Capstone.Models;

namespace Capstone.Controllers
{
    [ApiController]
    [Route("/projects")]
    public class ProjectController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public ProjectController(DatabaseContext context)
        {
            _context = context;
        }

        [HttpGet("all", Name = "GetAllProjects")]
        public async Task<ActionResult<List<Project>>> GetAllProjects()
        {
            return await _context.Projects.ToListAsync();
        }

        [HttpGet("{Title}")]
        public async Task<ActionResult<Project>> GetProjectByName(string Title)
        {
            var project = await _context.Projects.FindAsync(Title);

            if (project == null) return NotFound($"{Title} not found.");

            return project;
        }

        [HttpPost]
        public async Task<ActionResult<Project>> CreateProject(Project p)
        {
            if (p.Title.Length < 1) return BadRequest("Your project needs a title!");

            Project newProject = new Project();
            newProject.Title = p.Title;
            newProject.Start = p.Start;
            newProject.YarnBrand = p.YarnBrand;
            newProject.Weight = p.Weight;
            newProject.Colorway = p.Colorway;
            newProject.Dyelot = p.Dyelot;
            newProject.Favorite = p.Favorite;
            newProject.Notes = p.Notes;

            _context.Projects.Add(p);
            await _context.SaveChangesAsync();

            return Created("Projects", p);
        }

        [HttpPut("{Title}")]
        public async Task<ActionResult<Project>> UpdateProject(Project p)
        {
            _context.Projects.Add(p);
            await _context.SaveChangesAsync();

            return Created("update", p);
        }

        [HttpDelete("{Title}")]
        public async Task<ActionResult<Project>> DeleteProject(string Title)
        {
            var project = await _context.Projects.FindAsync(Title);

            if (project == null) return NotFound($"{Title} not found.");

            _context.Projects.Remove(project);
            await _context.SaveChangesAsync();

            return Ok(project);
        }

    }
}