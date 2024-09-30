/*
Leer un texto de la entrada estándar y contar cuántas palabras tiene, cuántas de ellas empiezan por A. Suponemos que una palabra está separada de otra 
por uno o más espacios, un tabulador y el texto acaba con un punto, no existe ningún punto y aparte y las palabras son todas correctas.
*/

var frase=prompt("Escriba una frase");
var cont=1;
var a=0;

for(var i=0;i<frase.length;i++){
    if (frase.charAt(i)==" "){
        cont++;
        if(frase.charAt(i+1)=="a"||frase.charAt(i+1)=="A"){
            a++;
        }
    }
}

if(frase.charAt(0)=="A"){
    a++;
}

alert("La frase tiene "+cont+" palabras y "+a+" empiezan por a");  