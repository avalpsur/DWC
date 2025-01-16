window.addEventListener("load",inicializar,false);

function inicializar(){
    document.getElementById("enviar").addEventListener('click', crearCookies, false);
}

function crearCookies(){
    document.cookie = "nombre=" + document.getElementById("nombre").value;
    document.cookie = document.getElementById("tipocafe")

    const tipoCafe = document.querySelectorAll("#tipoCafe input[type='checkbox']");

    tipoCafe.forEach(element => {
        if (element.checked){
            document.cookie = "tipocafe=" + element.id;
        }
    });
}   