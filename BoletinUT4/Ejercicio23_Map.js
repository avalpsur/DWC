/*
En este ejercicio, de cada módulo se desea guardar su nombre, duración y alumnos matriculados (módulo, duración, numAlumnos). Utiliza la estructura que sea más conveniente. 
Comprueba si existe en tu estructura el módulo “DWS” (Servidor) y si es así devuelve el número de alumnos matriculados en dicho módulo.
Calcula el número total de alumnos matriculados en todos los módulos
*/

const asignaturas = new Map();

asignaturas.set("DWC",["120 horas",20]);
asignaturas.set("DWS",["100 horas",21]);
asignaturas.set("EIE",["60 horas",6]);
asignaturas.set("DAW",["85 horas",16]);
asignaturas.set("DIW",["85 horas",19]);

if(asignaturas.has("DWS") == true){
    for (let [clave,valor] of asignaturas){
        if(clave=="DWS"){
            console.log("El número de alumnos de "+clave+" es "+ valor[1])
        }
    }
}
let sum = 0;

    for (let [clave,valor] of asignaturas){
        sum+=valor[1];
    }
console.log("El total de alumnos es "+sum);