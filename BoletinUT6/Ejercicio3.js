
document.body.onload = addElement;

function addElement(){
    let cuadradilla="list-style-type:square"
    document.getElementsByTagName("ul")[0].setAttribute("style",cuadradilla)

    let li =  document.createElement("li");

    let mer = document.createTextNode("Mercedes");

    li.appendChild(mer);

    lista = document.getElementsByTagName("ul")[0]

    
    let array = [...document.getElementsByTagName("li")]
    
    let bmw = array.find((elemento)=>elemento.firstChild.textContent=="BMW")

    let li2 =  document.createElement("li");

    let mer2 = document.createTextNode("Mercedes");

    li2.appendChild(mer2);

    lista.insertBefore(li,bmw);
    lista.insertBefore(li2,bmw.nextSibling);
}
