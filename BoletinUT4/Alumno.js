/*
Crear un clase Alumno con su nombre, DNI, ... (objeto Persona), curso y notas de cada módulo. 
Crear su constructor y un método para imprimir un Alumno, otro que devuelva la nota media y otro para obtener su mejor nota y el nombre del módulo con esa nota (puede tener la misma nota en varios módulos). 
*/


class Alumno extends Persona{
    constructor(nombre,dni,edad,curso,notas){
        super.nombre = nombre;
        super.dni = dni;
        super.edad = edad;
        this.curso = curso;
        this.notas = notas;
    }

    imprimirDatos(){
        return console.log(this.nombre + " está en "+this.curso+" curso, su DNI es "+ this.dni+" y sus notas son "+this.nota);
    }

    notaMedia(){
        let media;
        let sum = 0;
        for (let i = 0; i<this.notas.length;i++){
            sum += this.notas[i];
        }
        media=sum/this.notas.length;
        return media;
    }

    notaMayor(){
        let mayor = 0;
        for (let i = 0;i<this.notas.length;i++){
            if (number(this.notas[i])>mayor){
                mayor = nota[i];
            }
        }

        let notas = this.notas.filter((param) => param == mayor);
        return notas
    }
}
