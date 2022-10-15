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

/* programacion para acceso a datos de login*/
const btnRegister = document.querySelector("#btn-register")
const btnLogin = document.querySelector("#btn-login") //


const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const usuario = document.getElementById("usuario")
const contraseña = document.getElementById("password")


btnRegister.onclick = function (event) {
  event.preventDefault();

  let expresion = /\w+@\w+\.+[a-z]/

  console.log(nombre.value)
  console.log(email.value)
  console.log(usuario.value)
  console.log(nombre.value)

  if (nombre.value === "" && email.value === "" && usuario.value === "" && contraseña.value === "") {
    Swal.fire({
      icon: "warning",
      title: "¿Quieres registrarte?",
      text: "Por favor ingresa todos los campos, son obligatorios"
    });
    return false;
  }

  if (nombre.value === "") {
    /* alert("ingresa tu nombre completo") */
    Swal.fire({
      icon: "error",
      title: "Upsss",
      text: "Por favor ingresa nombre completo"
    });
    return false;
  } else if (nombre.value.length < 8) {
    Swal.fire({
      icon: "error",
      title: "No te preocupes",
      text: "El nombre es muy corto, minimo debe ser de 8 caracteres"
    });
    return false;
  } 

  else if (email.value === "") {
    Swal.fire({
      icon: "error",
      title: "Tranquilo",
      text: "Tienes que ingresar tu correo"
    });
    return false;
  } else if (!expresion.test(email.value)) {
    /* alert("el correo no es Válido") */
    Swal.fire({
      icon: "warning",
      title: "Veamos que paso",
      text: "El formato de correo no es valido, ingresa asi: example@mail.com"
    });
    return false;
  } else if (email.value.length > 50) {
    Swal.fire({
      icon: "warning",
      title: "Muy bien",
      text: "Pero tu correo debe ser un poco mas cortito, menos de 50 caracteres"
    });
    return false;
  } 
  
  else if (usuario.value === "" || usuario.value.length < 5 ) {
    Swal.fire({
      icon: "error",
      title: "Hey ya casi",
      text: "Tienes que ingresar un nombre para tu Usuario y debe ser entre 5 y 20 caracteres"
    });
    return false;
  } else if (usuario.value.length > 20 ) {
    Swal.fire({
      icon: "warning",
      title: "Hey ya casi",
      text: "El nombre para tu Usuario y debe ser maximo de 20 caracteres"
    });
    return false;
  } 
  
  else if (contraseña.value === "") {
    Swal.fire({
      icon: "error",
      title: "Bien, es el ultimo paso",
      text: "Ahora tienes que ingresar una Contraseña y debe ser mas de 6 caracteres"
    });
    return false;
  } else if (contraseña.value.length < 6) {
      Swal.fire({
      icon: "warning",
      title: "Recuerda",
      text: "La Contraseña debe tener mas de 6 caracteres"
    });;
    return;
  }
  Swal.fire({
    title: "Felicidades",
    text: "Ya estas Registrado, ahora disfruta de nuestra carta para comprar nuestras pizzas",
    icon: "success"
  });
  registerData()

}

function registerData() {

  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    console.log(inputs, "inpputs")
    localStorage.setItem(input.name, input.value)
  });

  login();
}


function login() {
  const email = localStorage.getItem("email")
  const password = localStorage.getItem("password")
  const nombre = localStorage.getItem("nombre")
  const usuario = localStorage.getItem("usuario")
  form.style.display = "none";
  usuarioSection.style.display = "block";
  titleEmail.innerHTML = email
  titlePassword.innerHTML = password
  titleNombre.innerHTML = nombre
  titleUsuario.innerHTML = usuario
  console.log(email,"email" )
};

const titleEmail = document.querySelector("#textemail")
const titlePassword = document.querySelector("#textpassword")
const titleNombre = document.querySelector("#textnombre")
const titleUsuario = document.querySelector("#textusuario")
const form = document.querySelector("#contenedor-login")
const usuarioSection = document.querySelector("#usuario-logged")
const btnCerrarSesion = document.querySelector("#cerrar-sesion")



btnCerrarSesion.onclick = function () {
  localStorage.removeItem("email")
  localStorage.removeItem("password")
  localStorage.removeItem("nombre")
  localStorage.removeItem("usuario")

  usuarioSection.style.display = "none";
  form.style.display = "block"
}

usuarioSection.style.display = "none";