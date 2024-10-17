/*
Diseñar un script que lea una dirección de email y la valide. No se terminará hasta introducir una dirección correcta. 
Modificar el ejercicio anterior para una vez validado el correo mostrar el usuario y el servidor de correo en dos mensajes.
*/

let direccion = prompt("Introduzca una dirección de email");

let re = new RegExp(/[a-z\.0-9]+[@].+[.].+/,'m');

if(matches = re.exec(direccion) != null){
    alert(direccion);
} else{
    alert("Dirección de correo inválida");
}