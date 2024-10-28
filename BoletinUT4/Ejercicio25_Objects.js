/*

Crear un objeto Punto con dos coordenadas (x,y) y un método para averiguar el cuadrante en el que está.

*/

function Punto(x,y) {
    this.x = x;
    this.y = y;

    this.saberCuadrante=function(){
        return console.log("Las coordenadas son ("+this.x+","+this.y+")")
    }
};

let coordenada = new Punto(115,59);

coordenada.saberCuadrante();