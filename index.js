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

async function getOneUser(idUser) {
    try {
        const response = await fetch("https://localhost:7112/api/Users/" + idUser);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const user = await response.json();
        console.log(user);
        // Aqui você pode manipular os dados do usuário como desejar
        // Por exemplo, exibir o nome do usuário em um elemento HTML
        document.getElementById('retorno').textContent = user.name;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}




async function updateUser(idUser, updatedData) {
    try {
        const response = await fetch("https://localhost:7112/api/Users/" + idUser, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const updatedUser = await response.json();
        console.log(updatedUser);
        // Aqui você pode manipular os dados do usuário atualizado como desejar
        // Por exemplo, exibir uma mensagem de sucesso
        document.getElementById('retorno').textContent = `Usuário atualizado: ${updatedUser.name}`;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

async function createUser(newUser) {
    try {
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
        // Aqui você pode manipular os dados do usuário criado como desejar
        // Por exemplo, exibir uma mensagem de sucesso
        document.getElementById('retorno').textContent = `Usuário criado: ${createdUser.name}`;
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
        // Aqui você pode manipular a resposta como desejar
        // Por exemplo, exibir uma mensagem de sucesso
        document.getElementById('retorno').textContent = `Usuário com ID ${idUser} foi excluído.`;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}


const updatedData = {
    name: 'Novo Nome',
    email: 'novoemail@example.com'
    // Adicione outros campos que deseja atualizar
};

updateUser(1, updatedData);