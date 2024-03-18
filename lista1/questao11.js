/*
11.	Faça um algoritmo que leia dois horários (hora, minuto e segundo) e 
escreva quantos segundos  transcorreram entre esses dois horários.
*/

let hi = 15, mi = 30, si = 50
let hf = 19, mf = 55, sf = 35

let inicio_seg = (hi*3600) + (mi*60) + si
let final_seg = (hf*3600) + (mf*60) + sf

let diferenca_seg = final_seg - inicio_seg
console.log(`Passaram-se ${diferenca_seg} segundos.`)