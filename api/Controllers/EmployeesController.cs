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

        [HttpGet("")]
        public IActionResult Get()
        {
            return Ok(db.Employees.ToList());
        }

        [HttpPost("{depId}")]
        public IActionResult Post(int depId, [FromBody] Employee employee)
        {
            if (ModelState.IsValid)
            {
                if (db.Employees.Where(e => e.Email == employee.Email).Count() == 0)
                {
                    employee.Department = db.Departments.Find(depId);
                    db.Employees.Add(employee);
                    employee.Department.isEmpty = false;
                    db.SaveChanges();
                    return Ok();
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            return BadRequest(ModelState);
        }

        [HttpPut("")]
        public IActionResult Put([FromBody] Employee employee)
        {
            if (ModelState.IsValid)
            {
                if (db.Employees.Where(e => e.Email == employee.Email).Count() == 0)
                {
                    db.Update(employee);
                    db.SaveChanges();
                    return Ok(employee);
                }
                {
                    return BadRequest(ModelState);
                }
            }
            return BadRequest(ModelState);
        }
        
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Employee employee = db.Employees.FirstOrDefault(x => x.Id == id);
            if (employee != null)
            {
                int depId = employee.DepId;
                db.Employees.Remove(employee);
                db.SaveChanges();
                if (db.Employees.Where(e => e.DepId == depId).Count() == 0)
                {
                    employee.Department = db.Departments.Find(depId);
                    employee.Department.isEmpty = true;
                    db.SaveChanges();
                }
            }
            return Ok();
        }
    }
}
