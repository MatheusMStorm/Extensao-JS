/*
6.	Faça um algoritmo que leia 3 valores v1, v2 e v3 e coloque-os em ordem crescente, 
de forma que v1 contenha o menor, v2 contenha o elemento do meio (nem o maior, nem o menor), 
e v3 contenha o maior.Escreva os valores ordenados. 
*/

let v1 = 2, v2 = 5, v3 = 4
let aux, aux2

if (v1 < v3 < v2) {
    aux = v2
    v2 = v3
    v3 = aux
}
else if (v2 < v1 < v3) {
    aux = v1
    v1 = v2
    v2 = aux
}
else if (v2 < v3 < v1) {
    aux = v1
    v1 = v2
    v2 = v3
    v3 = aux
}
else if (v3 < v1 < v2) {
    aux = v3
    v3 = v2
    v2 = v1
    v1 = aux
}
else if (v3 < v2 < v1) {
    aux = v3
    v3 = v1
    v1 = aux
}

console.log(v1, v2, v3)