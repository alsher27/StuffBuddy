namespace StuffBuddy.DAL.Repositories
{
    public class RepositoryBase
    {
        protected readonly Context _context;
        
        public RepositoryBase(Context context)
        {
            this._context = context;
        }
    }
}