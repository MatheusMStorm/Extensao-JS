/*
12.	Faça um algoritmo que a partir de um horário (hora, minuto, segundo) 
e uma quantidade de segundos transcorridos, calcule o segundo horário.
*/

let h = 16, m = 40, s = 37
let seg_transcorridos = 9600

let hi_seg = (h*3600) + (m*60) + s
let hf_seg = hi_seg + seg_transcorridos

let hora_hf = Math.floor(hf_seg/3600)
let min_hf = Math.floor((Math.abs(hf_seg/3600).toFixed(2) - hora_hf)*60)
let seg_hf = Math.floor((seg_transcorridos%3600)%60)

console.log(`Segundo horário: ${hora_hf}:${min_hf}:${seg_hf}`)