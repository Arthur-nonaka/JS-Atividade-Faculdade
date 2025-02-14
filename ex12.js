const prompt = require('prompt-sync')();

const n1 = prompt("Preço: ")
const n2 = prompt("Desconto: ")

let result = n1 - (n1 * n2/100);

console.log("resultado: R$" + result) 