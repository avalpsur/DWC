/*
Realizar un script que tome una serie de palabras ingresadas por el usuario 
(separadas por coma) y almacena esas palabras en un array. Posteriormente, manipule el array para mostrar en una nueva ventana los siguientes datos: 
*/

let cad = "."
let array=new Array()
while(cad!=""){
    cad=prompt("Introduzca una cadena")
    if(cad!=""){
        array.push(cad)
    }
}

let ventana;

document.getElementById("abrir").addEventListener("click",() =>{
    ventana=window.open();
    ventana.document.write(array[0]);
    ventana.document.write(array[array.length-1]);
    ventana.document.write(array.length);
    array.sort()
    ventana.document.write(array.toString());

})