/*
Estamos interesados en calcular los ingresos medios de un conjunto de hombres y mujeres. Para ello disponemos de un documento donde se recoge si 
se trata de un hombre (H) o una mujer (M) y su sueldo correspondiente. La entrada de datos termina cuando se lee un * como sexo. Se validarán todas las 
entradas, el sexo será H o M y el sueldo entre los 1000 y 2000 euros independientemente de que el trabajador sea hombre o mujer.
*/

let sexo=prompt("Introduzca el sexo. SI desea teriminar, escriba *");

while(sexo!="H" && sexo!="M" && sexo!="*"){
    sexo=prompt("Introduzca un valor adecuado (H o M). Si desea teriminar, escriba *");
}
let cont=0;
let sueldo,media;
let sum=0;

while(sexo!="*"){
    sueldo=prompt("Introduzca el sueldo del trabajador");
    while(sueldo<1000 || sueldo>2000){
        sueldo=prompt("Introduzca un sueldo comprendido entre 1000 y 2000 euros");
    }
    sum+=sueldo;
    cont++;
    
    let sexo=prompt("Introduzca el sexo. SI desea teriminar, escriba *");

    while(sexo!="H" && sexo!="M" && sexo!="*"){
        sexo=prompt("Introduzca un valor adecuado (H o M). Si desea teriminar, escriba *");
    }
}

if (cont>0){
    media=sum/cont;
    alert("El ingreso medio de los trabajadores es de "+media);
}else{
    alert("No ha introducido ningún trabajador");
}