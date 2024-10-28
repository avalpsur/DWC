/*
Implementar el ejercicio 20 y 21(sólo imprimir los datos), usando objetos. (P.e. clase Persona)
*/

class Persona {
    constructor (dni,nombre,edad){
        this.dni = dni;
        this.nombre = nombre;
        this.edad = edad;
    }

    imprimirDatos(){
        return console.log(this.nombre + " tiene "+this.edad+" años y su DNI es "+ this.dni);
    }
}

let mohcen = new Persona("20504897T","Mohcen",23);
mohcen.imprimirDatos();