window.addEventListener("load",inicializar,false);

function inicializar(){
    document.getElementById("boton1").addEventListener('click', ((evento) => {
        alert(evento.target.getAttribute("id"))}), false);
    document.getElementById("boton2").addEventListener('click', ((evento) => {
        alert(evento.target.getAttribute("id"))}), false);
};
