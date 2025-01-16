window.addEventListener("load",inicializar,false);
function inicializar(){
    document.getElementById("pulsar").addEventListener('click', mostrarTexto, false);
}

function mostrarTexto(){
    alert("Has pulsado el botón");
}