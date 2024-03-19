/*
5.	Faça um algoritmo que leia 3 valores v1, v2 e v3, e escreva-os em ordem crescente.
*/

let v1 = 2, v2 = 3, v3 = 6

if (v1 < v2 < v3) {
    console.log(v1, v2, v3)
}
else if (v1 < v3 < v2) {
    console.log(v1, v3, v2)
}
else if (v2 < v1 < v3) {
    console.log(v2, v1, v3)
}
else if (v2 < v3 < v1) {
    console.log(v2, v3, v1)
}
else if (v3 < v1 < v2) {
    console.log(v3, v1, v2)
}
else if (v3 < v2 < v1) {
    console.log(v3, v2, v1)
}