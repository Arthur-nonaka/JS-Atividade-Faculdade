const prompt = require('prompt-sync')();

const celsius = prompt("Celsius: ");

const f = parseInt(celsius) * 1.8 + 32;

console.log(f);