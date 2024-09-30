//Hacer un algoritmo que lea el número correspondiente a un mes del calendario y presente en pantalla su nombre usando una estructura de control adecuada.

let opcion=parseInt(prompt("Introduzca el número del mes"));

switch(opcion){
    
    case 1:
        alert("Enero");
        break;

    case 2:
        alert("Febrero");
        break;

    case 3:
        alert("Marzo");
        break;

    case 4:
        alert("Abril");
        break;

    case 5:
        alert("Mayo");
        break;

    case 6:
        alert("Junio");
        break;

    case 7:
        alert("Julio");
        break;
    
    case 8:
        alert("Agosto");
        break;
    
    case 9:
        alert("Septiembre");
        break;

    case 10:
        alert("Octubre");
        break;

    case 11:
        alert("Noviembre");
        break;

    case 12:
        alert("Diciembre");
        break;
    
    default: 
        alert("Valor incorrecto");
        break;

}