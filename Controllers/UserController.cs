using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Capstone.Models;
using Microsoft.EntityFrameworkCore;

namespace Capstone.Controllers
{
    [ApiController]
    [Route("/login")]
    public class UserController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public UserController(DatabaseContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<User>>> GetUser()
        {
            return await _context.Users.ToListAsync();
        }

        [HttpPost("{email}")]
        public async Task<ActionResult<User>> CreateUser(string email, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(e => e.Email == email);
            if (user == null) return NotFound();
            if (user.Password != password) return Unauthorized();
            return user;
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteUser(int id)
        {
            var userToDelete = await _context.Users.FindAsync(id);
            if (userToDelete == null)
            {
                return NotFound();
            }
            _context.Users.Remove(userToDelete);
            await _context.SaveChangesAsync();

            return Accepted(userToDelete);
        }
    }
}