window.addEventListener("load",inicializar,false);

function inicializar(){
    window.addEventListener("mousemove", mostrarCoordenadas, false);
};

function mostrarCoordenadas(evento){
    document.getElementById("cX").value  = evento.clientX;
    document.getElementById("cY").value = evento.clientY;
}  