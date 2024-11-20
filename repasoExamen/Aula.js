class aula{
    constructor(...alumnos){
        this.alumnos=alumnos;
    }

    buscarDNI(DNI){
        return this.alumnos.find((alumno) => alumno.dni === DNI)
    }

    ordenarNota(DNI){
        let alumno = this.buscarDNI(DNI)

        alumno.notas.sort((a,b) => a-b);
        return alumno;
    }

s
    imprimirAlumnos(){
        return document.write(this.alumnos.toString())
    }
}