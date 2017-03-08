using Microsoft.AspNetCore.Mvc;
using JBS.Core.Repositories;
using JBS.Persistence.StaticFile.Repositories;
using JBS.Core.Entities;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace JBS.Web.Controllers
{
    [Route("api/[controller]")]
    public class BranchesController : Controller
    {
        private readonly IBranchesRepository _branchesRepo;

        public BranchesController()
        {
            _branchesRepo = new BranchesRepository();
        }

        [HttpGet]
        public IActionResult Get()
        {
            var branches = _branchesRepo.GetAllBranches();

            if (branches == null)
                return NotFound();

            return Ok(branches);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            if (id < 1)
                return BadRequest();

            var branch = _branchesRepo.GetBranch(id);

            return Ok(branch);
        }

        [HttpPost]
        public void Post([FromBody]Branch value)
        {
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Branch value)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
