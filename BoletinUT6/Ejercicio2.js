document.body.onload = addElement;

function addElement(){
    let para = document.createElement("p");
    let txt1 = document.createTextNode("Este es el");
    para.appendChild(txt1);

    let enfasis = document.createElement("em");
    let txt2 = document.createTextNode("contenido")
    enfasis.appendChild(txt2);

    para.appendChild(enfasis);

    let txt3 = document.createTextNode("de mi párrafo");
    
    para.appendChild(txt3);

    let lugarInsercion = document.getElementById("testdiv");

    document.body.insertBefore(para, lugarInsercion);
}
