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
                actionsCell.innerHTML = `<button onclick="getOneUser(${user.id});$('#userModal').modal('show');" class="btn btn-outline-warning">Edit</button>
                <button onclick="deleteUser(${user.id})" class="btn btn-outline-danger">Delete</button>`;
            });
        })
        .catch(error => console.error('Error fetching users:', error));
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

async function getOneUser(idUser) {    
    console.log(idUser)
    try {
        const response = await fetch("https://localhost:7112/api/Users/" + idUser);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const user = await response.json();
        console.log(user);

        document.getElementById('#userID').value = user.id;
        document.getElementById('#userName').value = user.name;
        document.getElementById('#userEmail').value = user.email;
        document.getElementById('#userAge').value = user.age;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function createOrUpdate() {
    let idUser =  document.getElementById('#userID').value
    if (!!idUser)
        updateUser(idUser);
    else
        createUser();
}


async function updateUser(idUser) {
    try {
        const userUpdated = {
            id: idUser,
            name: document.getElementById('#userName').value,
            email: document.getElementById('#userEmail').value,
            age: document.getElementById('#userAge').value
        }
        console.log(userUpdated);
        const response = await fetch(`https://localhost:7112/api/Users/${userUpdated}` , {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userUpdated)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

async function createUser() {
    try {
        const newUser = {
            name: document.getElementById('#userName').value,
            email: document.getElementById('#userEmail').value,
            age: document.getElementById('#userAge').value
        }
        const response = await fetch("https://localhost:7112/api/Users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const createdUser = await response.json();
        console.log(createdUser);

    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}


async function deleteUser(idUser) {
    try {
        const response = await fetch("https://localhost:7112/api/Users/" + idUser, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log(`Usuário com ID ${idUser} foi excluído.`);    
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}