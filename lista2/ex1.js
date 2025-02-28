const prompt = require('prompt-sync')();

const n1 = prompt("Qunatos nomes?: ");
let nomes = [n1];

for(let x = 0; x < n1; x++) {
    nomes[x] = prompt("Nome: ");
}

nomes.sort();

for(let x = 0; x < n1; x++) {
    console.log(nomes[x]);
}