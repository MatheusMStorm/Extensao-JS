/*
3.	Faça um algoritmo que leia 3 valores reais, notas de um aluno, e escreva sua média aritmética. 
A média aritmética de um conjunto de valores é dada pela soma dos valores dividido 
pela quantidade de valores considerados
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Qual foi sua nota da A1? ", a1 => {
    readline.question("Qual foi sua nota da A2? ", a2 => {
        readline.question("Qual foi sua nota da A3? ", a3 => {
            let media = ((Number(a1) + Number(a2) + Number(a3))/3).toFixed(1)
            console.log(media)
        })
    })
})