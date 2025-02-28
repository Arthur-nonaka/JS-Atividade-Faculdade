const prompt = require('prompt-sync')();

const n1 = prompt("Valor: ")
const n2 = prompt("Expoente: ")

let result = 1;

for(let i = 0; i< n2;i++) {
    result *= n1;
}

console.log("resultado: " + result) 