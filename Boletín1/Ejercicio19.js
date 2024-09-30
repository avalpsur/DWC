/*
Diseña un juego del trilero
*/

var acierto=false,intento
var escondite = Math.floor(Math.random() * 3) + 1;

while(acierto==false){

    intento=prompt("¿Dónde está la bolita?")

    if(intento!=escondite){
        alert("Ahí no está. Juguemos de nuevo")

        escondite = Math.floor(Math.random() * 3) + 1;
    }else{
        alert("¡ERES UN MÁQUINA!")
        acierto=true
    }
}