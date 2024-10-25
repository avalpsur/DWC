/*
Escribe una función a la que se le pase como parámetro un array y devuelva ese mismo array después de eliminar los elementos repetidos.
*/

let eliminarRepetidos = (array) => {
    const lista = new Set(array);
    return array = [...lista]
}

console.log(eliminarRepetidos([3,3,3,4,5,5,6,6,7,8,9]))