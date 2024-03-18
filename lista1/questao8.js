/*
8.	Faça um algoritmo que le um valor entre 0 e 9999 e calcula a soma dos seus dígitos. 
Dica: O dígito menos significativo de um número inteiro pode ser obtido pelo resto da divisão do número 
por 10. Os dígitos restantes podem ser obtidos pela divisão inteira por 10.
*/

let valor = 9999

if (valor >= 0 && valor <= 9999) {
    let unidade_milhar = Math.floor(valor/1000)
    valor = Math.floor(valor - unidade_milhar*1000)
    let centena = Math.floor(valor/100)
    valor = Math.floor(valor - centena*100)
    let dezena = Math.floor(valor/10)
    valor = Math.floor(valor - dezena*10)
    let unidade = Math.floor(valor/1)

    let soma_digitos = unidade_milhar + centena + dezena + unidade
    console.log(soma_digitos)
}
else {
    console.log("Valor não está entre 0 e 9999")
}