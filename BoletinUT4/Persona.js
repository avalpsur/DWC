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