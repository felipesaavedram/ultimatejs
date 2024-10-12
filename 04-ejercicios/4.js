/**
 * Escribir un algoritmo que 
 * escriba solamente los numeros impares
 * del 0 al 10
 * 
 * 
*/
num = 0;
i = 0;
do {

    if(num % 2 == 1) {
        console.log('Numero: ',num);
    }
    i++;
    num++;
} while(i <= 10)