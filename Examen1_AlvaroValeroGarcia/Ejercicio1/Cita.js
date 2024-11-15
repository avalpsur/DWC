//Clase cita

class Cita{
    constructor(sala,fecha){
        this.sala = sala;
        this.fecha = fecha;
    }

    mostrarCita(){
        return document.write("sala: "+this.sala+"; fecha "+this.fecha)
    }

}