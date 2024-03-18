/*
7.	Faça um algoritmo que lê uma quantia inteira em segundos e 
escreva o número de horas, minutos e segundos correspondente.
*/

let tempo = 9600

let seg = tempo % 60

let horas_dec = Math.abs((tempo / 3600)).toFixed(2)
let parte_dec = horas_dec - Math.floor(horas_dec)

let min = (Math.floor(parte_dec * 60))
let horas = Math.floor(horas_dec)

console.log(`São ${horas}:${min}:${seg}`)