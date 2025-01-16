window.addEventListener("load",inicializar,false);

function inicializar(){
    document.getElementById("enviar").addEventListener('click', calcular, false);
}

function calcular(){
    let total = document.getElementById("precio").value * document.getElementById("cantidad").value;

    document.getElementById("total").value =total;
}