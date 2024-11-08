// Clase Persona con sus datos

class Persona{
    constructor(dni,nombre){
        this.dni = dni;
        this.nombre = nombre;
    }   

    imprimirDatos(){
        return document.write("dni: "+dni+", nombre: "+nombre)
    }
}