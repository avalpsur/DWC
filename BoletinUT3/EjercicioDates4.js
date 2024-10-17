/*
Calcular de un conjunto de fechas la menor, la mayor y la diferencia en segundos entre ambas.
*/

let dia1 = prompt("Introduzca una fecha (año-mes-día)");
let dia2 = prompt("Introduzca otra fecha (año-mes-día)");

let fecha1 = new Date(dia1);

let fecha2 = new Date(dia2);
let dif = 0;


if(fecha1.getTime() > fecha2.getTime()){
    alert(fecha1.toDateString() + " es la mayor fecha y " + fecha2.toDateString() + " es la menor");
    dif = (fecha1.getTime() * 0.001) - (fecha2.getTime() * 0.001);

} else if(fecha1.getTime() < fecha2.getTime()){
    alert(fecha2.toDateString() + " es la mayor fecha y " + fecha1.toDateString() + " es la menor");
    dif = (fecha2.getTime() * 0.001) - (fecha1.getTime() * 0.001);

} else{
    alert("Ambas fechas son iguales");
}

alert("La diferencia entre ambas fechas es de "+dif+" segundos")

