//Diseñar un algoritmo para escribir en pantalla los n primeros números naturales, sus cuadrados, sus cubos y la suma de todos ellos.

let n = prompt("Introduzca un valor");
let sum=0;

for(var i=0;i<=n;i++){
    let cuadrado = Math.pow(i,2);
    let cubo = Math.pow(i,3);
    alert("El valor es "+i+". Su cuadrado es "+cuadrado+" y su cubo es "+ cubo);
    sum+=i;
}

alert("El sumatorio de los "+n+" primeros números es "+sum);
