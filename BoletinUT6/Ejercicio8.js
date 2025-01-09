

document.body.onload = addElement;

function addElement(){
    let div = document.createElement("div")

    document.body.appendChild(div)

    let sub = document.createElement("h2")
    let texto = document.createTextNode("Añadir elementos JSON a la lista")

    sub.appendChild(texto)
    div.appendChild(sub)

    let lista = document.createElement("ul")
    div.appendChild(lista) 

    let datosJSON = [
        {src:"uni.jpeg", desc: "descripcion1", specs: ["spec11", "spec12"]},
        {src:"uni.jpeg", desc: "descripcion2", specs: ["spec21", "spec22"]}
    ]
    
    datosJSON.forEach(item => {
        let li2 = document.createElement("li")
        lista.appendChild(li2)

        let img = document.createElement("img")
        img.src = item.src
        li2.appendChild(img)

        let p = document.createElement("p")
        p.textContent = item.desc
        li2.appendChild(p)

        let ul = document.createElement("ul")
        ul.classList.add("mostrar")
        li2.appendChild(ul)

        img.onclick = function () {
            mostrar(ul)
        }

        item.specs.forEach(elemento => {
            let li3 = document.createElement("li")
            li3.textContent = elemento
            ul.appendChild(li3)
        });


    })


    function mostrar(lista) {
        
    
        if (lista.style.display === "none") {
            lista.style.display = "block";
        } else {
            lista.style.display = "none";
        }
    }
}