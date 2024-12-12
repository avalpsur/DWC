document.body.onload = addElement;

function addElement(){
    let cuadradilla="list-style-type:square"
    document.getElementsByTagName("ul")[0].setAttribute("style",cuadradilla)
}