/*
Escribe todas las funciones en ES5 y con la notación de función flecha de ES6.
*/

let elMenor = (...valor) => Math.min(...valor);

alert(elMenor(4,9,2,87,23));


let colocaEnMedio = (array1, array2) => array1.splice((array1.length/2),0,...array2);


let uneArrays = (...array) =>  array.flat(...array);

alert(uneArrays([5,6,7],[8,9,10]));


let sumaArgPares = (...valor) => sumaArgPares.filter()

alert(sumaArgPares(4,2,6,3,9,7));