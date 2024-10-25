/*
Implementar funciones para el ejercicio anterior para imprimir los datos y para buscar una persona por apellidos, por DNI o por edad. ¿cómo podríamos optimizar la búsqueda?
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

let buscarApellidos = (apellidos) => datos.filter((elemento) => elemento[1] === apellidos);
let buscarDNI = (DNI) => datos.filter((elemento) => elemento[2] === DNI)

console.log(datos)
console.log(buscarApellidos("valero"));
console.log(buscarDNI("205060"));