/*
5.	Faça um algoritmo que leia 3 valores a, b e c, coeficientes de uma equação de segundo grau, 
e calcule e escreva as raizes da equação. 
Dica: As raízes de uma equação podem ser calculadas  pela fórmula de Baskhara.
*/

let a = 1
let b = 4
let c = -5

let delta = b*b - 4*a*c

if (delta >= 0) {
    let x1 = ((b*(-1) + Math.sqrt(delta))/(2*a)).toFixed(1)
    let x2 = ((b*(-1) - Math.sqrt(delta))/(2*a)).toFixed(1)

    console.log(`Equação: ${a}x^2 + ${b}x + ${c} \n Raízes: ${x1} e ${x2}`)
}
else {
    console.log("Delta negativo. Não há raiz real.")
}