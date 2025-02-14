const prompt = require('prompt-sync')();

const n1 = prompt("Nota 1: ")
const n2 = prompt("Nota 2: ")
const n3 = prompt("Nota 3: ")

const media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3;

console.log("media: " + media) 