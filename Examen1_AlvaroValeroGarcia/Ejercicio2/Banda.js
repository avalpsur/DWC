

class Banda{
    constructor(nombre,año,integrantes,telefono,estilo){
        this.nombre = nombre;
        this.año = año;
        this.integrantes = integrantes;
        this.telefono = telefono;
        this.estilo = estilo;
    }

    mostrarBanda(){
        return document.write("nombre: "+this.nombre+", año: "+this.año+", telefono: "+this.telefono+", estilo: "+this.estilo)
    }

    mostrarIntegrantes(){
        return this.integrantes.forEach((elemento) => document.write("dni: "+elemento.dni+", nombre: "+elemento.nombre+", apellido: "+elemento.apellido));
    }
}