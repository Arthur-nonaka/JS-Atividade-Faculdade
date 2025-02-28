const prompt = require('prompt-sync')();

const frase = prompt("Escreva uma frase: ");
const palavras = frase.split(" ");

console.log(palavras)


console.log(palavras.length)