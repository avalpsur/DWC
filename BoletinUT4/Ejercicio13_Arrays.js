/*
Realizar una función que rellene un matriz de orden N de número aleatorios. 
*/

let n = prompt("Introduzca el orden de la matriz")

let matriz = new Array()
let nuevoArray = []; 

for(let i =0;i<n;i++){
    nuevoArray = []; 

    for(let j=0;j<n;j++){

        let num = Math.floor(Math.random()*100);
        
        nuevoArray.push(num);
    }
    matriz.push(nuevoArray);
}

alert(matriz.toString());
console.log(matriz)