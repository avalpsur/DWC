document.body.onload = addElement;

function addElement(){
    let objeto = document.getElementById("objeto")
    let contenedor = document.getElementById("contenedor")

    objeto.ondragover = function(evento){
        evento.preventDefault();
        evento.target.style.border = "4px dotted purple";
    }

    contenedor.ondrop = function(evento) {
        evento.preventDefault();
        const data = evento.dataTransfer.getData("Text");
        evento.target.appendChild(document.getElementById(data));
        document.getElementById("demo").innerHTML = "The text was dropped.";
    };
}