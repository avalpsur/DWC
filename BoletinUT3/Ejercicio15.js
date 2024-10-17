/*
Realiza un programa que compruebe mediante expresiones regulares si un usuario ha introducido una matrícula de vehículo válida. 
Si el usuario añade la matrícula correctamente, formatea la cadena para que todas sean guardadas (imagina que luego se guardarán en una BBDD) 
de la misma forma, en mayúsculas y con un guión entre letras y números, por ejemplo: ABC-1234.
*/

let mat = prompt("Introduzca una matrícula");

let re = new RegExp(/[0-9]{4}[-][a-z]{3}/,'gmi');

if(mat == re.exec(mat)){
    alert("Matrícula correcta");
} else{
    alert("Matrícula incorrecta");
}