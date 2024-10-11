// Cual número es mayor?


// Resuelto con IF
function cualEsMayor(a,b) {
 if (a > b){
    return a;
 } 
 else { 
    return b ;
 }
}

let mayor = cualEsMayor(10,5);

console.log(mayor);

//Resuelto con Operador Ternario

function esMayor(c,d) {
    return (c > d) ? c : d;
    // c mayor que d, 
    //Si es Verdadero se retorna c
    //Si es falso se retorna d
}
let may = esMayor (3,15); //c

console.log(may)