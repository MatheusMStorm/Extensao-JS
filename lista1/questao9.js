/*
9.	Faça um algoritmo que leia 3 valores v1, v2 e v3, e troque os valores entre si de modo que ao final 
a variável v2 contenha o valor que foi lido para v1, a variável v3 contenha o valor que foi lido para v2,
e a variável v1 contenha o valor que foi lido para a variável v3. 
Dica: Para trocar os valores de duas variáveis (digamos v1 e v2) entre si, 
salva-se o valor de uma delas (p.ex., v1) em uma variável auxiliar qualquer (p.ex., aux) , 
copia-se o valor da segunda (v2) para a variável que foi salva (v1), 
e copia-se o valor da variável auxiliar (que contem o valor original da primeira), 
para a segunda variável.
*/

let v1 = 1, v2 = 2, v3 = 3
let aux, aux2

// valor de v1 para v2
aux = v2
v2 = v1
// valor de v2 para v3
aux2 = v3
v3 = aux
// valor de v3 para v1
v1 = aux2


console.log(`${v1}, ${v2}, ${v3}`)