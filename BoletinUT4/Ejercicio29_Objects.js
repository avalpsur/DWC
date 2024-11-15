class Aula{
    constructor(clase,alumno){
        this.clase=clase
        this.alumnos=alumno
    }
    buscarDNI(dni){
        return alumnos.filter((elemento) => elemento.dni == dni);
    }

    ordenarNota(dni){
        let notaAlta = this.alumnos.filter((elemento) => elemento.dni == dni);
        return notaAlta[0].notaMayor();
    }

    imprimirAlumnos(){
        return this.alumnos;
    }
}