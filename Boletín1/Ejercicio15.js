/*
Diseñar un programa que, dada una cierta cantidad de dinero que se leerá desde la entrada estándar, calcule cuál es el número mínimo de monedas de curso
legal que equivalen a dicha cantidad de dinero.
*/

let valor = prompt("Introduzca una cantidad de dinero")
let valorOriginal=valor
let dosEuros=0
let euro=0
let cincuentaCent=0
let veinteCent=0
let diezCent=0
let cincoCent=0
let dosCent=0
let cent=0


if (valor>=2){
    while(valor>=2){
        valor-=2
        dosEuros++
    }
}
if(valor>=1){
    valor-=1
    euro++
}
if(valor>=0.5){
    valor-=0.5
    cincuentaCent++
}
if(valor>=0.2){
    valor-=0.2
    veinteCent++
}
if(valor>=0.1){
    valor-=0.1
    diezCent++
}
if(valor>=0.05){
    valor-=0.05
    cincoCent++
}
if(valor>=0.02){
    valor-=0.02
    dosCent++
}
if(valor>=0.01){
    valor-=0.01
    cent++
} 


alert("El cambio en monedas de "+valorOriginal+" euros es de "+dosEuros+" monedas de dos euros, "+euro+" monedas de un euro, "+cincuentaCent+" monedas de cincuenta cent, "+veinteCent+" monedas de veinte, "+diezCent+" monedas de diez, "+ cincoCent+" monedas de 5, "+dosCent+" monedas de dos y "+cent+" monedas de céntimo")