window.addEventListener("load", crearDom, false);

let viajes = [{ "clase_pais": "usa", "ciudad_h2": "New York,NY", "detalle_precio_total": "1,899", "detalle_num_noches": 7, "precio_noche": 275, "ruta_imagen": "./photos/newyork.jpg", "pie_imagen": "Puente Brooklyn" },
{ "clase_pais": "paris", "ciudad_h2": "Paris,Francia", "detalle_precio_total": "1,499", "detalle_num_noches": 5, "precio_noche": 300, "ruta_imagen": "./photos/paris.jpg", "pie_imagen": "Notre Dame de Paris" },
{ "clase_pais": "uk", "ciudad_h2": "Londres,UK", "detalle_precio_total": "2,199", "detalle_num_noches": 5, "precio_noche": 440, "ruta_imagen": "./photos/london.jpg", "pie_imagen": "Torre de Londres" }]

function crearDom() {

    let h1 = document.getElementById("mostrar")

    let principal = document.createElement("ul");
    principal.setAttribute("id", "listaPrincipal")
    principal.setAttribute("style", "display:none")
    document.body.appendChild(principal);

    //Accionar mostrar
    h1.addEventListener("click", function () {
        if (principal.style.display == "none") {
            principal.style.display = "block";
        } else {
            document.body.removeChild(principal);

        }
    })




    viajes.forEach(elemento => {


        let viaje = document.createElement("li");
        viaje.setAttribute("class", elemento.clase_pais)
        principal.appendChild(viaje);

        let ciudad = document.createElement("h2")
        let texto = document.createTextNode(elemento.ciudad_h2)
        ciudad.appendChild(texto)
        viaje.appendChild(ciudad)

        let sep = document.createElement("span")
        sep.setAttribute("class", "detalle")
        let texto2 = document.createTextNode(elemento.detalle_precio_total + " por " + elemento.detalle_num_noches + " noches")
        sep.appendChild(texto2)
        viaje.appendChild(sep)

        let boton = document.createElement("input")
        boton.setAttribute("type", "button")
        boton.setAttribute("class", "reserva")
        boton.setAttribute("value", "¡Resérvalo ya!")
        viaje.appendChild(boton)


        //Crear campo para reservar

        boton.addEventListener("click", crearCampo, false)

        function crearCampo() {
            
            let campo = document.createElement("input")
            campo.setAttribute("type", "text")

            viaje.appendChild(campo)

            let boton2 = document.createElement("input")
            boton2.setAttribute("type", "button")
            viaje.appendChild(boton2)
            
            boton2.addEventListener("click",enviar,false)

            function enviar(){
                //Si el campo tiene más de un carácter guardo la variable en el almacenamiento local
                if(campo.value.length > 0){
                    localStorage.setItem("nombre", campo);
                }
            }

        }


        let listaFotos = document.createElement("ul")
        viaje.appendChild(listaFotos)

        let li = document.createElement("li")
        listaFotos.appendChild(li)

        let imagen = document.createElement("img")
        imagen.setAttribute("src", elemento.ruta_imagen)
        li.appendChild(imagen)
        let listaPrincipal = document.getElementById("listaPrincipal")
   

        let desc = document.createElement("span")
        let texto4 = document.createTextNode(elemento.pie_imagen)
        desc.appendChild(texto4)
        li.appendChild(desc)


        //Añadir la clase descripción

        imagen.addEventListener("mouseover", mostrarDescripcion, false)
        desc.addEventListener("mouseover", mostrarDescripcion, false)
        imagen.addEventListener("mouseout", quitarDescripcion, false)
        desc.addEventListener("mouseout", quitarDescripcion, false)

        function mostrarDescripcion() {
            sep.classList.add("destacado")
        }

        function quitarDescripcion() {
            sep.classList.remove("destacado")
        }



    });


}