const nombre = document.getElementById("myname");
const edad = document.getElementById("edad");
const fechadenacimiento = getElementById("nacimiento");
const correo = document.getElementById("email");
const condiciones = Document.getElementById("condiciones");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input ");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    if (nombre.ariaValueMax.length < 1 || nombre.ariaValueMax.trim() == ""){
        mostrarMensajeError();
    }
});

function mostrarMensajeError(){
    let elemento = document.querySelector(".myname");
    elemento.lastElementChild.innnerHTML = "Nombre no valido";
}
