/*
JS es un lenguaje que posee un paradigma orientado a objetos y a funciones por 
tal motivo presenta una particularidad que es:

No tipado
no existe int, float, string, ni char, ni nada

todo es var -> variable
de acuerdo al estandar ES6 se manejan 3 tipos de variable

VAR
Let es una variable de tipo "Protected"
CONST es un valor constante
*/

function validar(formulario){
    if((formulario.nombre.value.length < 0) && 
        (formulario.nombre.value.length >= 99)){
        alert("Favor de ingresar mas de tres carecteres en campo nombre");
        formulario.nombre.focus();
        return false;
    }
    var checarABC = "qwertyuiopasdfghjklñzxcvbnm" +
    "QWERTYUIOPASDFGHJKLÑZXCVBNM"
    var cadenaNombre = formulario.nombre.value;
    alert(cadenaNombre);
    var todoesvalido = true;
    for(var i = 0; i < cadenaNombre.length; i++){
        var caracteres = cadenaNombre.charAt(i);
        for(var j  = 0; j < checarABC.length; j++){
            if (caracteres == checarABC.charAt(j)){
                break;
            }
        }
        if ( j == checarABC.length){
            todoesvalido  = false;
            break;
        }
    }
    
    if(todoesvalido){
        alert("Ingrese solo letras en el campo de nombre");
        formulario.nombre.focus
    }
}