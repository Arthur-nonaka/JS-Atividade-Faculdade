const prompt = require('prompt-sync')();

const n1 = prompt("Qunatos numeros ?: ");
let numeros = [n1];

for (let x = 0; x < n1; x++) {
    numeros[x] = prompt("Numero: ");
}

for (let x = 0; x < n1; x++) {
    if (numeros[x] % 2 === 0) {
        console.log(numeros[x]);
    }
}