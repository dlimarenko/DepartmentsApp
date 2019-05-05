using Microsoft.EntityFrameworkCore.Migrations;

namespace api.Migrations
{
    public partial class newChange : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DepartmentEmpty",
                table: "Departments",
                newName: "isEmpty");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "isEmpty",
                table: "Departments",
                newName: "DepartmentEmpty");
        }
    }
}
