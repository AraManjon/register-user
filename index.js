import { User } from './classUser.js'

const buttonHTML = document.getElementById("addUser");
buttonHTML.addEventListener("click", addUser); 

const usuariosArray = []
function addUser() {
const userName = document.getElementById("userName").value
const password = document.getElementById("password").value
const newUser = new User (userName, password)
usuariosArray.push(newUser) 
console.log(usuariosArray)
}

const button1HTML = document.getElementById("logIn");
button1HTML.addEventListener("click", logIn); 

function logIn() {
    const verifyUsername = document.getElementById("loginUsername").value
    const verifyPassword = document.getElementById("loginPassword").value
    const userFound = usuariosArray.find( user => user.UserName === verifyUsername && user.Password === verifyPassword)
    if (userFound) {
        alert('El usuario existe')
    }
    if(!userFound) {
        alert('El usuario no existe')
    }
}