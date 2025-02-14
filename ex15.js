const prompt = require('prompt-sync')();

const n1 = prompt("Dias: ")

let horas = n1 * 24;
let minutos = horas * 60;
let segundos = minutos * 60;

console.log("Horas: " + horas) 
console.log("Minutos: " + minutos) 
console.log("Dias: " + segundos) 