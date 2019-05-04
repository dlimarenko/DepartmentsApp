using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/employees")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        DepartmentContext db;
        public EmployeesController(DepartmentContext context)
        {
            db = context;
        }

        [HttpGet("{depId}")]
        public IActionResult Get(int depId)
        {
            return Ok(db.Employees.Where(e => e.DepId == depId).ToList());
        }

        [HttpPost("{depId}")]
        public IActionResult Post(int depId, [FromBody] Employee employee)
        {
            if (ModelState.IsValid)
            {
                employee.Department = db.Departments.Find(depId);
                db.Employees.Add(employee);
                db.SaveChanges();
                return Ok(employee);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("")]
        public IActionResult Put([FromBody] Employee employee)
        {
            if (ModelState.IsValid)
            {
                db.Update(employee);
                db.SaveChanges();
                return Ok(employee);
            }
            return BadRequest(ModelState);
        }
        
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Employee employee = db.Employees.FirstOrDefault(x => x.Id == id);
            if (employee != null)
            {
                db.Employees.Remove(employee);
                db.SaveChanges();
            }
            return Ok();
        }
    }
}
