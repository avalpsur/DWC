window.addEventListener("load",inicializar,false); 

function inicializar(){
    document.addEventListener("keydown", mostrarTexto, false);
}

function mostrarTexto(evento){
    let tecla = evento.key;

    if(tecla == '1'){
        document.getElementById("ficha1").setAttribute("class", "visible");
    }else if(tecla == '2'){
        document.getElementById("ficha2").setAttribute("class", "visible");
    } else if(tecla == '3'){
        document.getElementById("ficha3").setAttribute("class", "visible");
    }
}