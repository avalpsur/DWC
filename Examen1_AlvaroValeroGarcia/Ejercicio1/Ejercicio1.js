

fecha1 = new Date(2025,5,13,9,30,0);
fecha2 = new Date(2024,5,13,9,30,0);
let cita1 = new Cita(1,fecha1);
let cita2 = new Cita(1,fecha2);


let citasPendientesPEP = [];
let historialCitasPEP = [];

let pepito = new Cliente("Pepito","Pérez","201654778P",citasPendientesPEP,historialCitasPEP);

pepito.añadirCita(cita1);
pepito.añadirCita(cita2);

console.log(pepito.mostrarDatos());