/*
Crear un objeto Rectángulo con un constructor a partir de dos objetos Punto, 
con métodos para hallar el perímetro del mismo y su área. Añade también dos métodos para calcular la base y la altura del rectángulo a partir de los puntos.
*/

function Punto(x,y) {
    this.x = x;
    this.y = y;

    this.saberCuadrante=function(){
        return console.log("Las coordenadas son ("+this.x+","+this.y+")")
    }
};


function Rectángulo(punto1,punto2){

    this.alto = punto2.y - punto1.y;
    this.ancho = punto2.x - punto1.x;

    this.calcularPerimetro = function(){
        let perimetro = 2*(this.alto + this.ancho);
        return perimetro;
    }

    this.calcularArea = function(){
        let area = this.alto * this.ancho;
        return area;
    }

}

let coordenada1 = new Punto(115,59);
let coordenada2 = new Punto(216,89);

let rectangulo1 = new Rectángulo(coordenada1,coordenada2);

console.log("La altura del rectángulo es "+rectangulo1.alto+", el ancho "+rectangulo1.ancho+", el área "+rectangulo1.calcularArea()+" y el perímetro "+rectangulo1.calcularPerimetro());