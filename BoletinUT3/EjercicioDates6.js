/*
Realizar un programa que calcule los días de la semana en que caerán los próximos 50 cumpleaños del usuario.
*/

let fechaNac = new Date(prompt("Introduzca su fecha de nacimiento"));

let fechaActual = new Date();

let diaSemana;

añoProx = fechaActual.getFullYear()+1;

fechaNac.setFullYear(añoProx);

for (let i = 0 ; i<50; i++){
    diaSemana = fechaNac.getDay();

    switch(diaSemana){
        case 1: 
            alert("Lunes");
            break;
        case 2:
            alert("Martes");
            break;
        case 3:
            alert("Miércoles");
            break;
        case 4:
            alert("Jueves");
            break;
        case 5:
            alert("Viernes");
            break;
        case 6:
            alert("Sábado");
            break;
        case 0:
            alert("Domingo");
            break;
        default: break;
    }

    añoProx +=1;

    fechaNac.setFullYear(añoProx);
}