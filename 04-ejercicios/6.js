/**
 * Crear algoritmo que devuelva 
 * cantidad de numeros positivos 
 * de un array.
 * 
*/

let array = [2,5,7,15,-5,-100,55];

function cuantosPositivos(arr){

    let i = 0;

    for (num of arr) {
        if (num > 0) {
            i++;
        }
    }
    return  i;
}

let resultado = cuantosPositivos(array);
console.log(resultado);