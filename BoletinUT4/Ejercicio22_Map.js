/*
Utiliza un map almacenar información sobre módulos impartidos en el IES de la siguiente manera:  ("DWECL", “Desarrollo Web en Entorno Cliente”). 
Añade la información con posterioridad a la creación de la estructura.

Muestra cuántos módulos hay almacenados
Muestra el contenido de la estructura
Devuelve las abreviaturas de todos los módulos guardados
Devuelve el nombre completo de todos los módulos
Consulta si está el módulo "DAW"
Si está, elimínalo.
Ordena alfabéticamente el map según las abreviaturas de los módulos

*/


const asignaturas = new Map();

asignaturas.set("DWC","Desarrollo Web en Entorno Cliente");
asignaturas.set("DWS","Desarrollo Web en Entorno Servidor");
asignaturas.set("EIE","Empresa e Iniciativa Emprendedora");
asignaturas.set("DAW","Despliegue de Aplicaciones Web");
asignaturas.set("DIW","Diseño de Interfaces Web");

console.log(asignaturas.size);

console.log(asignaturas);

for (let [clave,valor] of asignaturas){
    console.log(clave);
}


for (let [clave,valor] of asignaturas){
    console.log(valor);
}

console.log(asignaturas.has("DAW"))

if(asignaturas.has("DAW") == true){
    asignaturas.delete("DAW")
}
console.log(asignaturas.has("DAW"))

let array = [...asignaturas]

array.sort();
console.log(array);