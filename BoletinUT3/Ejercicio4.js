/*
Pedimos una cadena de texto que sabemos que puede contener paréntesis. Realiza un script que extraiga la cadena que se encuentra entre los paréntesis.
Ejemplo: Si escribimos el texto “Hola (que) tal” se mostrará “que”. Si no existe el signo “(“ mostrará una cadena vacía y si existe el signo
“(“pero no el signo “)” mostrará desde el primer paréntesis hasta el final.
*/
let string = prompt("Introduzca la frase que desee");
let er = new RegExp('[()]','m');

if(matches = er.exec(string) != null){
    alert("Hay paréntesis");
}else{
    alert("No hay ningún paréntesis")
}