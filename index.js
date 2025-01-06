document.addEventListener('DOMContentLoaded', () => {
    fetchUsers();
});

function fetchUsers() {
    fetch('https://localhost:7112/api/Users')
        .then(response => response.json())
        .then(users => {
            const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];
            users.forEach(user => {
                const row = userTable.insertRow();
                row.insertCell(0).textContent = user.id;
                row.insertCell(1).textContent = user.name;
                row.insertCell(2).textContent = user.email;
                row.insertCell(3).textContent = user.age;
                const actionsCell = row.insertCell(4);
                actionsCell.innerHTML = `<button onclick="editUser(${user.id})" class="btn btn-outline-warning">Edit</button>
                <button onclick="deleteUser(${user.id})" class="btn btn-outline-danger">Delete</button>`;
            });
        })
        .catch(error => console.error('Error fetching users:', error));
}

function editUser(userId) {
    // Implement edit functionality
    console.log('Edit user:', userId);
}


function getAllUsers(){
    const response = fetch("https://localhost:7112/api/Users");
    response
        .then(x => x.json())
        .then(lista => {
            lista.forEach(usuario => {
                retorno.textContent += ` ${usuario.email}`
            })
        })
}

function getOneUser(idUser){
    const response = fetch("https://localhost:7112/api/Users/" + idUser);
    response
        .then(x => x.json())
        
        console.log(x.json())
        // .then(lista => {
        //     lista.forEach(usuario => {
        //         retorno.textContent += ` ${usuario.name}`
        //     })
        // })
}