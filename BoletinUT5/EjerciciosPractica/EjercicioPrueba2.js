window.addEventListener("load",inicializar,false);

function inicializar(){
    document.getElementById("pasar").addEventListener('mouseover', color, false);
    document.getElementById("pasar").addEventListener('mouseout', salir, false);
}

function color(){
    document.getElementById("efectos").style.color = "red";
}

function salir(){
    document.getElementById("efectos").style.color = "black";
}