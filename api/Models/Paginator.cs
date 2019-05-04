using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Paginator
    {
        public int Length { get; set; }
        public int PageSize { get; set; }
        public int PageIndex { get; set; }
    }
}
