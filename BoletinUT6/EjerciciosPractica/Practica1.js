window.addEventListener("load", crearDom, false);

function crearDom() {
    let json = [{titular: "Noticia 1", resumen: "Resumen de la noticia 1",descripcion: "Esta es la noticia 1"},
        {titular: "Noticia 2",resumen: "Resumen de la noticia 2",descripcion: "Esta es la noticia 2"},
        {titular: "Noticia 3",resumen: "Resumen de la noticia 3",descripcion: "Esta es la noticia 3"}];


json.forEach(elemento=>{
    let div = document.createElement("div");
    document.getElementById("noticias").appendChild(div);

    let h2 = document.createElement("h2");
    let texto = document.createTextNode(elemento.titular);
    h2.appendChild(texto);
    div.appendChild(h2);

    let p = document.createElement("p");
    let texto2 = document.createTextNode(elemento.resumen);
    p.appendChild(texto2);
    div.appendChild(p);

    let desc = document.createElement("p");
    let texto3 = document.createTextNode(elemento.descripcion);
    desc.appendChild(texto3);
    div.appendChild(desc);
    desc.style.display = "none";

    let boton = document.createElement("input");
    boton.setAttribute("type","button");
    boton.setAttribute("value","Mostrar");
    div.appendChild(boton);

    boton.addEventListener("click",function(){
        if(desc.style.display == "none"){
            desc.style.display = "block";
            boton.value = "Ocultar";
        }else{
            desc.style.display = "none";
            boton.value = "Mostrar";
        }
    })

})

}
