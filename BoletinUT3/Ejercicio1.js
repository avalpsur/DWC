/*
Leer de teclado una serie de nombres hasta que aparezca la palabra "ULTIMO".
Contar cuántos nombres se han leído, cuántos comienzan C y cuántos contienen la ñ.
*/

var nombre=prompt("Introduzca un nombre. Si desea terminar, escriba 'ULTIMO'")
var cont=0,ñ=0,C=0

while(nombre!="ULTIMO"){
    cont++
    if (nombre.charAt(0)=="C"){
        C++
    }
    if(nombre.search("ñ")>=0){
        ñ++
    }
    nombre=prompt("Introduzca un nombre. Si desea terminar, escriba 'ULTIMO'")
}
alert("Se han leido ,"+cont+" nombres, de los cuales "+ñ+" contienen la ñ y "+ C+" empiezan por la C")