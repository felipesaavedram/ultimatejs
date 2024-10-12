/**
 * ESTE ALGORITMO ES PRUEBA 
 * DE ENTREVISTA TÉCNICA
 * 
 * Crear algoritmo que devuelva número
 * menor y mayor de un array.
 */

let array = [2,5,7,15,-5,-100,55,9999,-134];

function getMenorMayor(arr) {
    let menor = arr[0];
    let mayor = arr[0];
    
    for (num of arr) {
        menor = menor < num ? menor : num;
        mayor = mayor > num ? mayor : num;
    }
    return [menor, mayor];


}

let numbers = getMenorMayor(array)
console.log(numbers)
