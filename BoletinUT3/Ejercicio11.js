/*
regExp = ([a-z]+[A-Z]+[0-9]+[Caracteres especiales uno a uno]+){8-20}
*/

let mat = prompt("Introduzca una matrícula");

let re = new RegExp(/([a-z]+[A-Z]+[0-9]+[*&%?¿¡?!@]+){8-20}/,'gm');

if(matches = re.exec(mat) != null){
    alert("Matrícula correcta");
} else{
    alert("Matrícula incorrecta");
}