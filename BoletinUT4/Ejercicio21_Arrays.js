/*
Añade al ejercicio anterior las siguientes funciones, utiliza además las funciones creadas anteriormente (utiliza los métodos ya implementados de Array y funciones flecha):
mayorEdad: filtrará del array los usuarios mayores de edad e imprimirá sus datos en una nueva ventana.
menorEdad: filtrará del array los usuarios menores de edad e imprimirá en una nueva ventana los días y/o años que le quedan para su mayoría de edad.
modificaDatos: solicitará qué datos modificar, el dato por el que se va a modificar y el dni del usuario.
eliminaUsuario: elimina un usuario del array solicitando su dni. Además solicita confirmación antes de eliminar. 
*/

let datos = [];

let usuarios = [
    "Juan,Pérez,12345678X,30",
    "María,Gómez,87654321Y,25",
    "Carlos,Fernández,13579246Z,40",
    "Ana,Martínez,24681357W,22"
];

for (let nombre of usuarios) {
    let usuario = nombre.split(",");
    datos.push(usuario);
}

console.log(datos);



let buscarApellidos = (apellidos) => datos.filter((elemento) => elemento[1] === apellidos);
let buscarDNI = (DNI) => datos.filter((elemento) => elemento[2] === DNI)


console.log(buscarApellidos("Pérez"));
console.log(buscarDNI("13579246Z"));


function modificaDatos(){
    let user = prompt("Indica qué usuario deseas modificar")
    let dato = prompt("Indica qué dato deseas cambiar. 0:Nombre 1:Apellido 2:DNI 3:Edad")
    let modificacion = prompt("¿Qué deseas poner?")

    return datos[user].splice(dato,1,modificacion)
}

modificaDatos();

function eliminaUsuario(){
    let dniEliminar = prompt("Indica el DNI del usuario que quieras eliminar")
    if(buscarDNI(dniEliminar) != null){
        let decision = prompt("¿Seguro que desea eliminar ese usuario?")
        if(decision = "si"){
            return datos.splice((datos.indexOf(buscarDNI(dniEliminar)),1,""))
        }
    }
}

console.log(datos);