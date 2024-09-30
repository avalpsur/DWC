//Calcula el área y el volumen de una esfera cuyo radio se pide al usuario

let radio = prompt("Introduzca el radio")
var area
var volumen
area=4*Math.PI*Math.pow(radio,2)
volumen=4/3*Math.PI*Math.pow(radio,3)

alert("El área de la esfera con radio "+radio+" es "+area+" y el volumen es "+volumen)