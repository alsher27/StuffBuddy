using System.ComponentModel.DataAnnotations;

namespace StuffBuddy.ViewModels
{
    public class UserLoginModel
    {
        [Required]
        //[DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        
        [Required]
        //[DataType(DataType.Password)]
        public string Password { get; set; }
        
        public string Name { get; set; }
    }
}