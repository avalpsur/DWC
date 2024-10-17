/*
Hacer el Tarot que comprueba que la fecha de nacimiento, introducida no es mayor que la actual.
*/

let dia = prompt("Introduzca una fecha (año-mes-día)");

let fecha = new Date(dia);

let fechaActual = new Date();

if(fecha.getTime() > fechaActual.getTime()){
    alert("La fecha introducida es posterior a la actual");
} else if(fecha.getTime() < fechaActual.getTime()){
    alert("La fecha introducida es anterior a la actual");
} else{
    alert("Las dos fechas coinciden");
}
