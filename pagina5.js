(function(){
var formulario = document.getElementsByName('formulario')[0], 
    elementos = formulario.elements,
    boton= document.getElementById('btn');

    var validarUsername = function(){
        if(formulario.user.value == ""){
            alert("Completa el campo Username");
        }
    };

    var validar = function(e){
        e.preventDefault();
        validarUsername();
    };

    formulario.addEventListener("submit", validar)
}())