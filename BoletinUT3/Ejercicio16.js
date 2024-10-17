/*Diseña un programa que valide un código postal español, debe tener 5 números y el código postal «más alto» debería ser 52999. Es decir, 
no existe un código postal en España que empiece por 53 o superior.*/

let codPos = prompt("Introduzca el código postal");

let re = RegExp(/([0-5][0-2][0-9]{3})|([0-4][0-9]{4})/,'');

if(matches = re.exec(codPos != null)){
    alert("El código postal es correcto");
} else{
    alert("El código postal es incorrecto");
}