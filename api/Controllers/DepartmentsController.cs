using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/departments")]
    [ApiController]
    public class DepartmentsController : ControllerBase
    {
        DepartmentContext db;
        public DepartmentsController(DepartmentContext context)
        {
            db = context;
        }

        // GET: api/Departments
        [HttpGet]
        public DepartmentsPage Get()
        {
            Paginator paginator = new Paginator()
            {
                Length = db.Departments.Count(),
                PageIndex = 1,
                PageSize = 5
            };
            return new DepartmentsPage(db.Departments.ToList(),paginator);
        }

        // POST: api/Departments
        [HttpPost]
        public IActionResult Post([FromBody] Department department)
        {
            if (ModelState.IsValid)
            {
                db.Departments.Add(department);
                db.SaveChanges();
                return Ok(department);
            }
            return BadRequest(ModelState);
        }

        // PUT: api/Departments/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Department department)
        {
            if (ModelState.IsValid)
            {
                db.Update(department);
                db.SaveChanges();
                return Ok(department);
            }
            return BadRequest(ModelState);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Department department = db.Departments.FirstOrDefault(x => x.Id == id);
            if (department != null)
            {
                db.Departments.Remove(department);
                db.SaveChanges();
            }
            return Ok(department);
        }
    }
}
