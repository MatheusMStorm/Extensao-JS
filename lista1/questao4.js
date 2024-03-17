/*
4.	Faça um algoritmo que leia 2 valores reais v1 e v2 e 
calcule e escreva a área do triângulo que tem base igual a v1 e altura igual a v2. 
Dica: A área de um triângulo é dada pela expressão: 
(base x altura)/2
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Qual o valor da base? ", v1 => {
    readline.question("Qual o valor da altura? ", v2 => {
        area = ((Number(v1) * Number(v2))/2).toFixed(1)
        console.log(area)
    })
})