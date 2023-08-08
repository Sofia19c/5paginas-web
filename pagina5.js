(function(){
var formulario = document.getElementsByName('formulario')[0], 
    elementos = formulario.elements,
    boton= document.getElementById('btn');

    validarUsername = function(){
        if(formulario.user.value == ""){
            alert("Completa el campo validar")
        }
    };

    var validar = function(){
        validarUsername();
    };

    formulario.addEventListener("submit", validar)
}())