// Clase alumno con sus datos

class Alumno{
    constructor(curso,notas){
        this.curso = curso
        this.notas = notas
    }

    imprimirDatos(){
        return document.write("dni: "+super.dni+", nombre: "+super.nombre+", curso: "+this.curso+", notas: "+this.notas.toString())
    }

    notaMedia(){
        let arrayNotas = [...this.notas.values()];
        let sumatorio = arrayNotas.reduce((sum,valor) => sum+valor)
        let media = sumatorio / arrayNotas.length;
        return media
    }
    mayorNota(){
        let arrayNotas = [...this.notas.values()];
        let notaMasAlta = arrayNotas.reduce((mayor,valor) => valor > mayor ? valor:mayor)
       
        let arrayAsignaturas = [...this.notas];
        let indice = arrayAsignaturas.findIndex(([asignatura,nota]) => nota === notaMasAlta)
        return arrayAsignaturas[indice]
        
    }

    
}
const notarias = new Map( [ ["DWC",2],["DWS",7],["DAW",4] ] )
let alumno1 = new Alumno("2B",notarias)

console.log(alumno1.notaMedia())
console.log(alumno1.mayorNota())