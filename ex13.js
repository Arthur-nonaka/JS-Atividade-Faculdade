const prompt = require('prompt-sync')();

const n1 = prompt("Capital: ")
const n2 = prompt("Juros: ")
const n3 = prompt("Periodo: ")

let result = parseFloat(n1) * parseFloat(n2) * parseFloat(n3);

console.log("resultado: " + result) 