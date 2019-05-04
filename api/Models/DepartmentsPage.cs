using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class DepartmentsPage
    {
        public List<Department> departmentItems;
        public Paginator paginator;

        public DepartmentsPage(List<Department> departmentItems, Paginator paginator)
        {
            this.departmentItems = departmentItems;
            this.paginator = paginator;
        }
    }
}
