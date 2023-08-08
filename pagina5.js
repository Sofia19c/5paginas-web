var usuarios = [];

(function () {

  function agregarFila(user, name, imagen) {
    
    const tablita = document
      .getElementById("filas")
    const nuevaFila = tablita.insertRow();

    const Username = nuevaFila.insertCell(0);
    const Nombre = nuevaFila.insertCell(1);
    const Imagen = nuevaFila.insertCell(2);
    const Mascotas = nuevaFila.insertCell(3);

    var botonMascota = document.createElement("button");
    botonMascota.textContent = "Ver mascota";
    botonMascota.addEventListener("click",(e)=>{
      e.preventDefault();
      mostrarMascotica(user);
    })

    var mostrarMascotica = function(usuario){
      var mascoticaUwU;
      for (let index = 0; index < usuarios.length; index++) {
        const element = usuarios[index];

        if (usuario == element[0] ) {
          mascoticaUwU = element[3]
        }

      }
      var listaMascota = document.getElementById("lista");
      while (listaMascota.firstChild){
        listaMascota.removeChild(listaMascota.firstChild);
      }
      var item = document.createElement("li");
      item.textContent = mascoticaUwU;
      listaMascota.appendChild(item);
      
    }
  

    Username.innerHTML = user ;
    Nombre.innerHTML = name;
    Imagen.innerHTML = imagen ;
    Mascotas.appendChild(botonMascota);

  }
  var formulario = document.getElementsByName("formulario")[0],
    elementos = formulario.elements,
    boton = document.getElementById("btn");

  var validarUsername = function () {

    for (let index = 0; index < usuarios.length; index++) {
      const element = usuarios[index];
      if(element[0]==formulario.user.value){
        alert("El usuario ya existe");
        return false;
      }
    }
    if (!formulario.user.value.includes(".")) {
      alert("Porfavor asegurece de tener el punto");
      return false;
    }else{
        return true;
    }

  } ;

  var validarUrl = function(){
    var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    var regex = new RegExp(expression);
    if(formulario.imagen.value.match(regex)){
      return true;
    }else{
      alert("la imagen debe ser una url");
      return false;
    }
  }

  var validar = function (e) {
    e.preventDefault();
    var userBien = validarUsername();
    var valiUrl = validarUrl();
    if (userBien && valiUrl) {
        usuarios.push([formulario.user.value , formulario.name.value , formulario.imagen.value , formulario.mascota.value])
    }
    actualizarTabla();
  };

  var actualizarTabla = function (){
    const tablita = document.getElementById("filas")
    while (tablita.firstChild){
      tablita.removeChild(tablita.firstChild);
    }
    for (let index = 0; index < usuarios.length; index++) {
      const element = usuarios[index];
      agregarFila(element[0], element[1], element[2]);
    }
    
  }
  formulario.addEventListener("submit", validar);
})();

document.addEventListener(DOMContentLoaded, function () {});
