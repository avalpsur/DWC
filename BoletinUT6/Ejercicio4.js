
document.body.onload = get_fortune;

/*function get_fortune() {
    var hoy = new Date(); dichos= new Array(
    "Carpe Diem.",
    "El silencio es oro, pero la cinta aislante es plata.", "Una manzana al día, mantiene al doctor en la lejanía.", "A cada uno lo suyo.",
    "Si a la primera no lo consigues, inténtalo de nuevo.", "No te conformes con la mediocridad, pelea por el éxito", "Vive y deja vivir."
    );
    var n=dichos.length;
    numero = Math.floor(Math.random()*n);
    dicho = "Hoy es: "+hoy+ ".<br /><br />Hoy la suerte te dice:<br /><br /><em>" +dichos[numero] +"</em>"; 
    document.getElementById('divdicho').innerHTML = dicho;
    }
*/

function get_fortune(){

    let hoy = new Date()

    let div = document.createElement("div");

    document.getElementsByTagName("body")[0].appendChild(div);

    let dichos = new Array(
        "Carpe Diem.",
        "El silencio es oro, pero la cinta aislante es plata.", "Una manzana al día, mantiene al doctor en la lejanía.", "A cada uno lo suyo.",
        "Si a la primera no lo consigues, inténtalo de nuevo.", "No te conformes con la mediocridad, pelea por el éxito", "Vive y deja vivir."
        );

    var n=dichos.length;
    numero = Math.floor(Math.random()*n);

    let txt = document.createTextNode("Hoy es: "+hoy+ ".<br /><br />Hoy la suerte te dice:<br /><br /><em>" +dichos[numero] +"</em>");
    div.appendChild(txt);

}