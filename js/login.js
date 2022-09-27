const btnLogin = document.querySelector("#btn-login") //

document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPagina);

//declarando variables

let contenedor_login_register = document.querySelector(".contenedor__login-register");
let formulario_login = document.querySelector(".formulario__login");
let formulario_register = document.querySelector(".formulario__register");
let caja_trasera_login = document.querySelector(".caja__trasera-login");
let caja_trasera_register = document.querySelector(".caja__trasera-register");

function anchoPagina() {
    if (window.innerWidth > 850) {
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
    } else {
        caja_trasera_register.style.display = "block"
        caja_trasera_register.style.opacity = "1"
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
    
}

anchoPagina();

function iniciarSesion() {

    if (window.innerWidth > 850) {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }


}

function register() {

    if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }

}

btnLogin.onclick = function (event) {
    event.preventDefault();

    const inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
        console.log(inputs)
        localStorage.setItem(input.name, input.value)
    });

login();

}

/* const email = localStorage.getItem("email")
const password = localStorage.getItem("password") */

function login() {
    const email = localStorage.getItem("email")
    const password = localStorage.getItem("password")
    form.style.display = "none";
    usuarioSection.style.display="block";
    titleEmail.innerHTML = email
    titlePassword.innerHTML = password
}

const titleEmail = document.querySelector("#email")
const titlePassword = document.querySelector("#password")
const form = document.querySelector("#contenedor-login")
const usuarioSection = document.querySelector("#usuario-logged")
const btnCerrarSesion = document.querySelector("#cerrar-sesion")

if (email !== null && password !== null) {
    /* alert ("porfavor ingrese sus datos") */
}else{
    usuarioSection.style.display = "none"
}

btnCerrarSesion.onclick = function () {
    localStorage.removeItem("email")
    localStorage.removeItem("password")

    usuarioSection.style.display = "none";
    form.style.display="block"
}

usuarioSection.style.display = "none";