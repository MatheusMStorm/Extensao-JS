/*
10.	Faça um algoritmo que leia 4 valores, Hi, Mi, Hf, Mf, representando respectivamente a hora e minuto 
inicial e final de um evento, e calcule a duração do mesmo em horas e minutos. 
Considere que o evento inicia e termina no mesmo dia. Dica: Para simplificar o problema, converta cada 
par de valores em um único valor em minutos.
*/

let hi = 13, mi = 30, hf = 19, mf = 45

let inicio_min = (hi*60) + mi
let final_min = (hf*60) + mf

let duracao_so_min = final_min - inicio_min
let duracao_dec = Math.abs(duracao_so_min/60).toFixed(2)

let duracao_hs =  Math.floor(duracao_dec)
let parte_dec = duracao_dec - Math.floor(duracao_dec)
let duracao_min = Math.floor(parte_dec*60)

console.log(`Duração: ${duracao_hs} hora(s) e ${duracao_min} minuto(s)`)