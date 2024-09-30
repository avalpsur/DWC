/*Escriba un algoritmo que lea un instante de tiempo dado en horas y minutos y escriba como respuesta los mensajes “Buenos días” “Buenas tardes” 
“Buenas noches”, de acuerdo con las siguientes reglas:*/
horaInicioMañana="07:30";
horaInicioTarde="14:01";
horaInicioNoche="20:31";

horaUsuario = prompt("Introduzca la hora");

while(horaUsuario<"00:00" || horaUsuario>"23:59"){
    prompt("Introduzca una hora correcta");
}

if(horaUsuario>=horaInicioMañana && horaUsuario<horaInicioTarde){
    alert("Buenos días");
} else if(horaUsuario>=horaInicioTarde && horaUsuario<horaInicioNoche){
    alert("Buenas tardes");
} else{
    alert("Buenas noches");
}