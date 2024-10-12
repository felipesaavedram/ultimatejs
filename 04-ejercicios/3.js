/**
 * indice validar que no sea menor a 
 * cero y que el elemento exista en 
 * el array
*/
function getbyIdx(arr, idx){
    if (idx < 0 || arr.length <= idx) {
        return 'El Elemento no existe';
    }
    return arr[idx];
}

let resultado = getbyIdx([1,2,3,4,'Pedro',false],5);
console.log(resultado); 