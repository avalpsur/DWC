/*
Realiza un supertrim de una cadena, eliminando todos los espacios duplicados.
*/

let cadena = prompt("Introduzca una cadena")

alert(cadena)

let re = new RegExp(/\s{2,}/,'g')

cadena = cadena.replace(re,' ')


alert(cadena)
