/*
Realizar un programa que muestre cuántos días faltan para el próximo cumpleaños del usuario y muestre “¡Felicidades!” si es el día señalado.
*/

let fecha = new Date(prompt("Introduzca el día de su próximo cumpleaños"));
let fechaActual = new Date();

if (fecha.getTime() == fechaActual){
    alert("¡¡¡¡¡FELICIDADES!!!!!");
} else{
    dif = (fecha.getTime() / 1000 / 60 / 60 / 24) - (fechaActual.getTime() / 1000 / 60 / 60 / 24);
    alert("Quedan " + dif + " días para tu cumpleaños")
}