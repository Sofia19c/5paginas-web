var usuarios = [];

(function () {
  const botonDos = document.getElementById("agregarFila");
  botonDos.addEventListener("click", agregarFila);

  function agregarFila() {
    const tablita = document
      .getElementById("filas")
    const nuevaFila = tablita.insertRow();

    const Username = nuevaFila.insertCell(0);
    const Nombre = nuevaFila.insertCell(1);
    const Imagen = nuevaFila.insertCell(1);
    const Mascotas = nuevaFila.insertCell(1);

    Username.innerHTML = "Nuevo Nombre";
    Nombre.innerHTML = "Nueva Edad";
    Imagen.innerHTML = "Nueva Edad";
    Mascotas.innerHTML = "Nueva Edad";
  }
  var formulario = document.getElementsByName("formulario")[0],
    elementos = formulario.elements,
    boton = document.getElementById("btn");

  var validarUsername = function () {
    if (!formulario.user.value.includes(".")) {
      alert("Porfavor asegurece de tener el punto");
    }
  };
  var validar = function (e) {
    e.preventDefault();
    validarUsername();
  };

  formulario.addEventListener("submit", validar);
})();

document.addEventListener(DOMContentLoaded, function () {});
