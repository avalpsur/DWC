/*
Realiza un algoritmo que solicite del usuario un tiempo dado en segundos y calcule y presente en pantalla dicho tiempo pero expresado en 
horas, minutos y segundos.
*/ 
let inst =prompt("Introduzca un tiempo dado en segundos")

let seg, min, horas

seg=inst%60

inst=inst/60

min=inst%60

horas=inst/60

alert("El instante "+inst+" representa "+horas+" horas, "+min+" min y "+seg+" segundos")