const prompt = require('prompt-sync')();

const altura = prompt("altura do retangulo: ");
const largura = prompt("largura do retangulo: ");

const area = parseFloat(altura) * parseFloat(largura);

console.log(area);