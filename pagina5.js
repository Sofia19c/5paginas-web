var usuarios = [];

(function () {
  const botonDos = document.getElementById("agregarFila");
  botonDos.addEventListener("click", agregarFila);

  function agregarFila(user, name, imagen, mascota) {
    const tablita = document
      .getElementById("filas")
    const nuevaFila = tablita.insertRow();

    const Username = nuevaFila.insertCell(0);
    const Nombre = nuevaFila.insertCell(1);
    const Imagen = nuevaFila.insertCell(1);
    const Mascotas = nuevaFila.insertCell(1);

    Username.innerHTML = user ;
    Nombre.innerHTML = name;
    Imagen.innerHTML = imagen ;
    Mascotas.innerHTML = mascota;
  }
  var formulario = document.getElementsByName("formulario")[0],
    elementos = formulario.elements,
    boton = document.getElementById("btn");

  var validarUsername = function () {
    if (!formulario.user.value.includes(".")) {
      alert("Porfavor asegurece de tener el punto");
      return false;
    }else{
        return true;
    }
  } ;
  var validar = function (e) {
    e.preventDefault();
    var userBien = validarUsername();

    if (userBien) {
        usuarios.push([formulario.user.value , formulario.name.value , formulario.imagen.value , formulario.mascota.value])
    }
  };

  var actualizarTabla = function (){

  }
  formulario.addEventListener("submit", validar);
})();

document.addEventListener(DOMContentLoaded, function () {});
