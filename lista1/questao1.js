/*
1.	Faça um algoritmo que leia um valor N, 
representando o lado de um quadrado, e calcule e escreva a área do quadrado.
*/

// Processo para input e output dentro do console
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Qual o lado do quadrado? \n", n => {
    console.log(`Área = ${n*n}`)
})