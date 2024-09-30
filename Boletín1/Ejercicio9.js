// Hallar el menor, el mayor y la media de un conjunto de números positivos leídos de teclado.

let salir=false;
let sum=0;
let cont=0;
alert("Introduzca valores hasta que desee. Para terminar, escriba 'salir'")

let num=prompt("Introduzca un valor");
let mayor=num,menor=num;


while(!salir){


    if (num>mayor){
        mayor=num;
    }else if(num<menor){
        menor=num;
    }
    sum+=parseInt(num);
    cont++;

    num=prompt("Introduzca un valor");
    if(num=="salir"){
        salir=true
    }
}

let media=sum/cont

alert("El mayor es "+mayor+" el menor es "+menor+" y la media es "+media)