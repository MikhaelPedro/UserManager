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

function getAUsers(){
    const response = fetch("https://localhost:7112/api/Users");
    response
        .then(x => x.json())
        .then(lista => {
            lista.forEach(usuario => {
                retorno.textContent += ` ${usuario}`
            })
        })
}