window.addEventListener("load", crearDom, false);


let json = [
    { src: "/img/img1.jpg", desc: "descripcion1", specs: ["spec11", "spec12"] },
    { src: "/img/img2.jpg", desc: "descripcion2", specs: ["spec21", "spec22"] },
]


function crearDom() {
    let div = document.createElement("div");

    document.body.appendChild(div);
    let encabezado = document.createElement("h1");
    let texto = document.createTextNode("Subtitulo");
    encabezado.appendChild(texto);

    div.getAttribute("id", "viajes");

    div.appendChild(encabezado);

    let ul = document.createElement("ul");
    ul.getAttribute("class", "lista");
    div.appendChild(ul);


    json.forEach(element => {
        let li = document.createElement("li");
        ul.appendChild(li);

        let img = document.createElement("img");
        img.setAttribute("src", element.src);

        img.setAttribute("class", "img");
        li.appendChild(img);


        let p = document.createElement("p");
        let texto = document.createTextNode(element.desc);
        p.appendChild(texto);
        li.appendChild(p);

        let ul2 = document.createElement("ul");
        li.appendChild(ul2);

        img.onclick = function () {
            mostrar(ul2)
        }

        element.specs.forEach(elemento => {
            let li2 = document.createElement("li");
            let texto = document.createTextNode(elemento);
            li2.appendChild(texto);
            ul2.appendChild(li2);
        });
    });

    function mostrar(ul) {
        if (ul.style.display === "none") {
            ul.style.display = "block";
        } else {
            ul.style.display = "none";
        }

    }

};