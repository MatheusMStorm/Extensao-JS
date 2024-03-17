/*
2.	Faça um algoritmo que leia dois valores inteiros e escreva a sua soma
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Digite o primeiro número: ", a => {
    readline.question("Digite o segundo número: ", b => {
        let soma = Number(a) + Number(b)
        console.log(`Soma = ${soma}`)
    })
})