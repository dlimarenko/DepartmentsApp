using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Department
    {
        public int Id { get; set;}
        public string Name { get; set; }
        public bool isEmpty { get; set; }

        public ICollection<Employee> Employees { get; set; }

        public Department()
        {
            Employees = new List<Employee>();
        }
    }
}