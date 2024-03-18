/*
6.	Faça um algoritmo que lê um valor inteiro em Reais e calcula e escreve qual o menor número possível 
de notas de 100,50,20,10,5,2 e 1 real em que o valor pode ser decomposto. 
Dica: Isso pode ser calculado a partir de operações de divisão inteira.
*/

let valor = 989

let notas100 = Math.floor(valor/100)
valor = Math.floor(valor - notas100*100)
let notas50 = Math.floor(valor/50)
valor = Math.floor(valor - notas50*50)
let notas20 = Math.floor(valor/20)
valor = Math.floor(valor - notas20*20)
let notas10 = Math.floor(valor/10)
valor = Math.floor(valor - notas10*10)
let notas5 = Math.floor(valor/5)
valor = Math.floor(valor - notas5*5)
let notas2 = Math.floor(valor/2)
valor = Math.floor(valor - notas2*2)
let notas1 = Math.floor(valor/1)
valor = Math.floor(valor - notas1*1)

console.log(`${notas100} nota(s) de R$ 100 \n
${notas50} nota(s) de R$ 50 \n
${notas20} nota(s) de R$ 20 \n
${notas10} nota(s) de R$ 10 \n
${notas5} nota(s) de R$ 5 \n
${notas2} nota(s) de R$ 2 \n
${notas1} nota(s) de R$ 1`)