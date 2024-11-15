//Clase Cliente

class Cliente{
    constructor(nombre,apellidos,dni,citasPendientes,historialCitas){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        //citasPendientes e historialCitas serán arrays de objetos Cita
        this.citasPendientes = citasPendientes;
        this.historialCitas = historialCitas;
    }

    //Añadimos un método a la clase para añadir nuevas citas, pero primero deberemos realizar las diferentes comprobaciones requeridas

    añadirCita(nuevaCita){
        //Comprobamos si hay alguna cita en esa sala
        let i = this.citasPendientes.findIndex((elemento) => elemento.sala === nuevaCita.sala)

        //Si el índice es menor que 0 la cita no existe en esa sala
        if(i<0){
            
            this.citasPendientes.push(nuevaCita);

        }else if(this.citasPendientes[i].fecha.getDate() == nuevaCita.fecha.getDate() && this.citasPendientes[i].fecha.getYear() == nuevaCita.fecha.getYear()){
            
            console.log("No se puede añadir una cita el mismo día")

        }else if(this.citasPendientes[i].fecha.getYear() != nuevaCita.fecha.getYear() || this.citasPendientes[i].fecha.getDate() < nuevaCita.fecha.getDate()){

            console.log("No se puede añadir una cita anterior")

        }else{
            console.log("La cita ya existe")
        }
    }

    mostrarDatos(){
        return this.nombre+" - "+this.apellidos+" - "+this.dni+" - "+this.citasPendientes+" - "+this.historialCitas
    }

    mostrarCitasPendientes(){
        return this.citasPendientes.forEach((elemento) => elemento.mostrarCita());
    }

    mostrarHistorialCitas(){
        return this.historialCitas.forEach((elemento) => elemento.mostrarCita());
    }

    programarRecordatorio(){

        document.getElementById("abrir-ventana").addEventListener('click',abrirVentana)

        let ventana;

        function abrirVentana(){
            ventana = window.open("", "", "width=200,height=100")
            mostrarCitasPendientes
        }

        abrirVentana();

        let diaActual = new Date();
        let citasFuturas = this.citasPendientes.filter((elemento)=> elemento.fecha.getTime() > diaActual.getTime());
        let citasPasadas =  this.citasPendientes.filter((elemento)=> elemento.fecha.getTime() < diaActual.getTime());

        this.historialCitas.push(...citasPasadas)

        setInterval(abrirVentana,1000)

    }
}