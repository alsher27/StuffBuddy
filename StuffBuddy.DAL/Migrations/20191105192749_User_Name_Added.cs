using Microsoft.EntityFrameworkCore.Migrations;

namespace StuffBuddy.DAL.Migrations
{
    public partial class User_Name_Added : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "FirstLastName",
                table: "AspNetUsers",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FirstLastName",
                table: "AspNetUsers");
        }
    }
}
