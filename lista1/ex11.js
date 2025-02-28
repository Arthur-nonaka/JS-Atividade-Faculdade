const prompt = require('prompt-sync')();

const n1 = prompt("Kg: ")
const n2 = prompt("Altura (m): ")

let result = n1 / (n2*n2);

console.log("resultado: " + result) 