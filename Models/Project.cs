namespace Capstone.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public System.DateTime Start { get; set; }
        public string YarnBrand { get; set; }
        public string Weight { get; set; }
        public string Colorway { get; set; }
        public string Dyelot { get; set; }
        public bool Favorite { get; set; }
        public string Notes { get; set; }
    }

}