//Diseñar un algoritmo para hallar el valor absoluto de un número leído de teclado y presentarlo en pantalla.
num=prompt("Introduzca un valor para hallar su valor absoluto");
if(num<0){
    alert("El valor absoluto de "+num+" es "+ -num);
}else{
    alert("El valor absoluto de "+num+" es "+ num);
}