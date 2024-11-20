class piloto{
    constructor(nombre,escuderia){
        this.nombre=nombre
        this.escuderia=escuderia
    }
}
class sesionCalificacion{
    constructor(piloto,tiempo){
        this.piloto = piloto
        this.tiempo=tiempo


    }

}



let Hamilton = new piloto("Hamilton","Mercedes")
let sesionHAM = new sesionCalificacion(Hamilton,77460)
let sesionHAM2 = new sesionCalificacion(Hamilton,77200)

let Verstappen = new piloto("Verstappen","Red Bull")
let sesionVER = new sesionCalificacion(Verstappen,77580)

let Alonso = new piloto("Alonso", "Aston Martin")
let sesionALO = new sesionCalificacion(Alonso,78540)


const calificacion = []

calificacion.push(sesionHAM)
calificacion.push(sesionALO)
calificacion.push(sesionVER)

calificacion.sort((a,b) => a.tiempo - b.tiempo)
console.log(calificacion)

calificacion.sort((a,b) => a.piloto.nombre.localeCompare(b.piloto.nombre))
console.log(calificacion)


añadirSesion(sesionHAM2);

console.log(calificacion)


function añadirSesion(sesionNueva){
    let index = calificacion.findIndex((sesion) => sesion.piloto.nombre ===sesionNueva.piloto.nombre)
    if(index == -1){
        calificacion.push(sesionNueva)
    }else if(calificacion[index].tiempo > sesionNueva.tiempo){
        calificacion.splice[index,1,sesionNueva]
    }
}

function eliminariSesion(sesionNueva){
    let index = calificacion.findIndex((sesion)=>sesion.piloto.nombre === sesionNueva)
    if(index == -1){
        this.calificacion.splice(index, 1);
    }
}