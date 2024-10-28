/*
Crear un clase Alumno con su nombre, DNI, ... (objeto Persona), curso y notas de cada módulo. 
Crear su constructor y un método para imprimir un Alumno, otro que devuelva la nota media y otro para obtener su mejor nota y el nombre del módulo con esa nota (puede tener la misma nota en varios módulos). 
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


class Alumno extends Persona{
    constructor(nombre,dni,curso,notas){
        this.nombre = nombre;
        this.dni = dni;
        this.curso = curso;
        this.notas = notas;
    }

    imprimirDatos(){
        return console.log(this.nombre + " está en "+this.curso+" curso, su DNI es "+ this.dni+" y sus notas son "+this.nota);
    }

    notaMedia(){
        let media
        
    }
}