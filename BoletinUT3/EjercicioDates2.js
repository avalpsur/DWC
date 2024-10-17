/*
Escribe un algoritmo que lea desde la entrada estándar dos fechas dadas por día, mes y año y calcule cuál de ellas es anterior a la otra.
*/

let dia1 = prompt("Introduzca una fecha (año-mes-día)");
let dia2 = prompt("Introduzca otra fecha (año-mes-día)");

let fecha1 = new Date(dia1);

let fecha2 = new Date(dia2);

if(fecha1.getTime() > fecha2.getTime()){
    alert("La primera fecha es posterior a la segunda");
} else if(fecha1.getTime() < fecha2.getTime()){
    alert("La segunda fecha es posterior a la primera");
} else{
    alert("Ambas fechas coinciden");
}
