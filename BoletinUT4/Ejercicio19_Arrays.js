/*
Hacer un programa en el que el usuario que introduzca, nombre, apellidos, DNI y fecha de nacimiento separado por comas.
Esta entrada de datos se repetirá hasta que el usuario introduzca la cadena vacía. El programa debe guardar los datos en un array bidimensional.
*/

let datos = []
let nombre="."

while(nombre!=""){
    let usuario=[]
    
    nombre = prompt("Introduzca el usuario(nombre,apellidos,DNI,fecha de nacimiento)")
        if (nombre!=""){
            usuario=nombre.split(",")
            datos.push(usuario)
        }
}
console.log(datos)