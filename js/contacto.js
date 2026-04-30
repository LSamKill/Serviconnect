const form = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value.trim();
  let correo = document.getElementById("correo").value.trim();
  let mensaje = document.getElementById("mensaje").value.trim();

  if(nombre === "" || correo === "" || mensaje === ""){
    respuesta.style.color = "red";
    respuesta.textContent = "Todos los campos son obligatorios";
    return;
  }

  if(!correo.includes("@")){
    respuesta.style.color = "red";
    respuesta.textContent = "Correo no válido";
    return;
  }

  if(nombre.length < 3){
    respuesta.style.color = "red";
    respuesta.textContent = "Nombre muy corto";
    return;
  }

  respuesta.style.color = "green";
  respuesta.textContent = "Mensaje enviado correctamente ✔";

  form.reset();
});