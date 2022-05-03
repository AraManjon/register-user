const usuariosArray = []
function añadirUsuario() {
const nombre = document.getElementById("usuario").value
usuariosArray.push(nombre) 
console.log(usuariosArray)
}

function logIn() {
    const comprobacion = document.getElementById("logIn").value
    const userFound = usuariosArray.find(user => user === comprobacion)
    if (userFound) {
        alert('El usuario existe')
    }
    if(!userFound) {
        alert('El usuario no existe')
    }
}