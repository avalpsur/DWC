/*    Crear un formulario que contiene un conjunto de casillas de verificación con diferentes tipos de cafés espresso, cappuccino, moka,   y 
así sucesivamente. Pida   al   usuario su nombre y número de habitación y seleccionar un tipo de café. Indicar al usuario   que va a enviar el café 
a su número de habitación. Cree las cookie para recordar las preferencias del usuario. La próxima vez que el usuario entre en la página, en introduzca su
nombre de usuario y habitación, se mostrará su café favorito. Después de haber pedido 3 cafés, se le dirá que hay una tarifa especial y su próximo café será gratuito.  */

window.addEventListener("load", inicializar, false);

function inicializar() {
    document.getElementById("formulario").addEventListener("submit", (evento) => {

        nombre = document.getElementById("nombre").value;
        document.cookie = `nombre=${nombre};SameSite=None; Secure"`;

        habitacion = document.getElementById("habitacion")
        document.cookie = `nombre=${habitacion};SameSite=None; Secure"`;

    });
   /* function checkACookieExists() {
        if (
            document.cookie.split(";").some((item) => item.trim().startsWith("reader="))
        ) {
            const output = document.getElementById("a-cookie-existence");
            output.textContent = '> The cookie "reader" exists';
        }
    }
        */
}