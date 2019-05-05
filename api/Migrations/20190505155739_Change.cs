using Microsoft.EntityFrameworkCore.Migrations;

namespace api.Migrations
{
    public partial class Change : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "DepartmentEmpty",
                table: "Departments",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DepartmentEmpty",
                table: "Departments");
        }
    }
}
