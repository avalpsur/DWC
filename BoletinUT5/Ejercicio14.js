/*    Crear un formulario que contiene un conjunto de casillas de verificación con diferentes tipos de cafés espresso, cappuccino, moka,   y 
así sucesivamente. Pida   al   usuario su nombre y número de habitación y seleccionar un tipo de café. Indicar al usuario   que va a enviar el café 
a su número de habitación. Cree las cookie para recordar las preferencias del usuario. La próxima vez que el usuario entre en la página, en introduzca su
nombre de usuario y habitación, se mostrará su café favorito. Después de haber pedido 3 cafés, se le dirá que hay una tarifa especial y su próximo café será gratuito.  */

window.addEventListener("load",inicializar,false);

function inicializar(){
    document.getElementById("formulario").addEventListener("submit",enivarPedido())
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}
  
function saveUsername(event) {
    event.preventDefault();
    let username = document.getElementById("nombre").value;
    if (username) {
        setCookie("nombre", username, 30);
        alert("Usuario guardado: " + username);
    }
}

function loadUsername() {
    const username = getCookie("nombre");
    if (username) {
        document.getElementById("bienvenido").textContent = "¡Bienvenido de nuevo, " + username + "!";
    }
}
window.onload = loadUsername;
