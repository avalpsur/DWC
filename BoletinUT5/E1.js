window.addEventListener("load",inicializar,false);
function inicializar(){
    document.getElementById("enviar").addEventListener('click', mostrarMayusculas, false);
}

function mostrarMayusculas(){
    let nombre = document.getElementById("nombre").value.toUpperCase();
    let contrasena = document.getElementById("contrasena").value.toUpperCase();
    let correo = document.getElementById("correo").value.toUpperCase();

    document.getElementById("salida").innerText = `Nombre: ${nombre}, Contraseña: ${contrasena}, Correo: ${correo}`

}