/*
Usa una expresión regular para eliminar todos los espacios en blanco de una cadena.
*/

let cadena = prompt("Introduzca una cadena")

let espacio = new RegExp(/\s/,'g')

if(matches = espacio.exec(cadena)){
    cadena = cadena.replace(espacio,'');
    alert(cadena);
} else{
    alert("No existe espacio en la cadena")
}

