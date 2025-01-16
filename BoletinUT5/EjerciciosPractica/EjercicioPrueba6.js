window.addEventListener("load",inicializar,false);

function inicializar(){
    document.getElementById("c2").addEventListener('mouseenter', ((evento) => {
            let bloque = evento.target;
            let origen = evento.relatedTarget;
            if (origen.id == "c1"){
                bloque.style.backgroundColor = "red";
            }else if(origen.id == "c3"){
                bloque.style.backgroundColor = "blue";
            }else{
                bloque.style.backgroundColor = "white";
            }

        }), false);
}