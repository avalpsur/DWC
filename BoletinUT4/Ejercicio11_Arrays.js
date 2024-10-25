/*
Dada una cadena leída por teclado, realizar un programa que extraiga los números que aparecen en dicha secuencia e imprima por pantalla dichos números y su suma. 
*/
let esNum = (cad) => {
    let arrayNum = new Array();
    let sum = 0;

    for (let i = 0;i<cad.length;i++){
        if (!isNaN(cad[i])){
            arrayNum.push(cad[i]);
        }
    }

    for (let i = 0;i<arrayNum.length;i++){
        sum+=Number(arrayNum[i]);
    }

alert("Los números introducidos son "+arrayNum.toString()+" y el sumatorio es "+ sum)
}

let cad = prompt("Introduzca una cadena");

esNum(cad)