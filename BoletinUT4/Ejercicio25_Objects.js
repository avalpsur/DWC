/*

Crear un objeto Punto con dos coordenadas (x,y) y un método para averiguar el cuadrante en el que está.

*/

const Punto = {
    x:37,
    y:122,

    cuadrante(){
        return console.log("Las coordenadas son ("+this.x+","+this.y+")")
    }
};

Punto.cuadrante();