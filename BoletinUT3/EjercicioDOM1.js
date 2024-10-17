let ventana;

function abrirVentana(){
    ventana = window.open("","_blank","height=400","width=800");
    for (propiedad in window.navigator){
        ventana.document.write(propiedad + ": "+window.navigator[propiedad]+ "<br>");   
    }
}

abrirVentana();