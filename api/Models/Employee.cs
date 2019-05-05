using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public int Tel { get; set; }
        public int Height { get; set; }
        public string DateOfBirth { get; set; }
        public int DepId { get; set; }

        public Department Department { get; set; }
    }
}