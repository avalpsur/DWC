window.addEventListener("load",inicializar,false);

function inicializar(){
    document.getElementById("pulsar").addEventListener('click', abrirVentana, false);
}
let ventana = null;

function abrirVentana(){
    ventana = window.open("","_blank","width=500,height=500");

    ventana.document.write("<h1>¡Hola Mundo!</h1>");
}