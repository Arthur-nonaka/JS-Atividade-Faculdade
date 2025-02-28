const prompt = require('prompt-sync')();

const f = prompt("Fahrenheit: ");

const celsius = (parseInt(f) - 32) * 5/9;

console.log(celsius);