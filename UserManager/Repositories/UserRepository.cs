using UserManager.Models;
using System.Collections.Generic;
using System.Linq;

namespace UserApi.Repositories
{
    public class UserRepository
    {
        private static List<User> _users = new List<User>
        {
            new User { Id = 1, Name = "Isabela Siqueira", Email = "isa@gmail.com", Age = 23 },
            new User { Id = 2, Name = "Mikhael Pedro", Email = "mikha@outlook.com", Age = 24 },
            new User { Id = 3, Name = "Pedro Silva", Email = "pedro@gmail.com", Age = 20 },
            new User { Id = 4, Name = "Gustavo Oliveira ", Email = "gustavo@outlook.com", Age = 20 },
            new User { Id = 5, Name = "Guilherme Dias", Email = "gdias@gmail.com", Age = 25 }
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
