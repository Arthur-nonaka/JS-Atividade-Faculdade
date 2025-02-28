const prompt = require('prompt-sync')();

const n1 = prompt("Qunatos numeros ?: ");
let numeros = [n1];

for (let x = 0; x < n1; x++) {
    numeros[x] = parseInt(prompt("Numero: "));
}

let soma = 0;

for (let x = 0; x < n1; x++) {
    soma += numeros[x];
}

console.log(soma);