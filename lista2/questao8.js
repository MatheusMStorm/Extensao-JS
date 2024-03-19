/*
8.	Faça um algoritmo que leia 3 valores a, b e c, lados de um triangulo, 
e verifique o tipo de triângulo formado escrevendo: 
0 - se o triângulo é equilátero (os três lados são iguais); 
1 - se o triângulo é isósceles (dois lados iguais e um diferente);
2 - escaleno (3 lados diferentes).
*/

let a = 2, b = 2, c = 2

if (b == c || a == c || a == b) {
    if (a == b && a == c) {
        console.log("Equilátero.")
    }
    else {
        console.log("Isósceles.")
    }
}
else {
    console.log("Escaleno.")
}