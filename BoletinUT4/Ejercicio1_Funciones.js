/* 
RHacer un programa que sume todos los parámetros pasados como argumentos de entrada en la llamada. El número de argumentos de entrada es desconocido.
*/

function sumaNumClasica(){
    var suma=0;
    for (let i = 0;i<arguments.length;i++){
        suma+=arguments[i];
    }
    return suma;
}

let sumaNumFlecha = (...param) => {
    var suma = 0;

    for (let i = 0;i<param.length;i++){
        suma+=param[i];
    }
    return suma;
}
