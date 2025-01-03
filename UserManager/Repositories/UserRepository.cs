using UserManager.Models;
using System.Collections.Generic;
using System.Linq;

namespace UserApi.Repositories
{
    public class UserRepository
    {
        private static List<User> _users = new List<User>
        {
            new User { Id = 1, Name = "John Doe", Email = "john@example.com", Age = 30 },
            new User { Id = 2, Name = "Jane Smith", Email = "jane@example.com", Age = 25 }
        };

        public IEnumerable<User> GetAll() => _users;

        public User GetById(int id) => _users.FirstOrDefault(u => u.Id == id);

        public void Add(User user)
        {
            user.Id = _users.Any() ? _users.Max(u => u.Id) + 1 : 1;
            _users.Add(user);
        }

        public void Update(User user)
        {
            var existingUser = GetById(user.Id);
            if (existingUser != null)
            {
                existingUser.Name = user.Name;
                existingUser.Email = user.Email;
                existingUser.Age = user.Age;
            }
        }

        public void Delete(int id) => _users.RemoveAll(u => u.Id == id);
    }
}
