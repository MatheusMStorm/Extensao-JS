/*
13.	Faça um algoritmo que leia a quantidade de alunos em uma sala de aula e 
a quantidade de alunos por grupo, e calcule e escreva quantos grupos serão formados 
e o resto de alunos que não foram suficientes para formar mais um grupo.
*/

let qtd_sala = 35
let qtd_grupo = 6

let num_grupos = Math.floor(qtd_sala/qtd_grupo)
let resto = qtd_sala % qtd_grupo

if (resto != 0) {
    console.log(`Teremos ${num_grupos} grupos com ${qtd_grupo} alunos, e restarão ${resto} alunos que formarão mais um grupo.`)
}
else {
    console.log(`Teremos ${num_grupos} com ${qtd_grupo}, e não restam alunos.`)
}