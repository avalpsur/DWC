/* Para comprobar si un año es o no bisiesto se usa la siguiente regla: “Un año es bisiesto si es divisible por 400, 
o bien es divisible por 4 pero no por 100”. Diseñar un programa que utilizando una variable lógica que tenga valor cierto si el año es bisiesto y 
falso si no lo es.
 */

var bisiesto=false;

let año=prompt("Indique el año para comprobar si es bisiesto");

if((año%400==0) || (año%4==0 && año%100!=0)){
    bisiesto=true;
}

if(bisiesto==true){
    alert(año + " es bisiesto");
} else{
    alert(año + " no es bisiesto");
}