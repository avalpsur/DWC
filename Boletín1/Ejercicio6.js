/*
Diseñar un algoritmo que tomando las coordenadas cartesianas de un punto en el plano 
calcule e imprima el cuadrante al que pertenece dicho punto. También debe detectar cuando está en el origen o sobre un eje. 
*/

let x = prompt("Introduzca un valor para el eje de las x");
let y = prompt("Introduzca un valor para el eje de las y");

if(x>0 && y>0){
    alert("El punto "+x+","+y+" está en el cuadrante 1");
} else if(x<0 && y>0){
    alert("El punto "+x+","+y+" está en el cuadrante 2");
} else if(x<0 && y<0){
    alert("El punto "+x+","+y+" está en el cuadrante 3");
} else if(x>0 && y<0){
    alert("El punto "+x+","+y+" está en el cuadrante 4");
}

if(x==0){
    if(y>0){
        alert("El punto "+x+","+y+" está en el eje positivo de las y");
    } else if(y<0){
        alert("El punto "+x+","+y+ "está en el eje negativo de las y");
    } else{
        alert("El punto "+x+","+y+" está en el origen");
    }
}

if(y==0){
    if(x>0){
        alert("El punto "+x+","+y+" está en el eje positivo de las x");
    }else if(x<0){
        alert("El punto "+x+","+y+" está en el eje negativo de las x");
    }
}