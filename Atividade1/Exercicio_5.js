// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

const prompt = require('prompt-sync')()


let peso = Number(prompt('Digite o seu peso: '))
let altura = Number(prompt('Digite a sua altura: '))

let IMC = peso / (altura * altura)

if ( IMC >= 0 && IMC <= 18.5) {
    console.log ('Você está abaixo do peso')
} else if ( IMC > 18.5 && IMC <= 24.9) {
    console.log ('Você está no seu peso NORMAL') 
} else if (IMC >= 25.0 && IMC <= 29.9) {
    console.log('Você está com SOBREPESO') 
} else if ( IMC > 30 && IMC <= 39.9) {
    console.log ('Você está na OBESIDADE')
} else {
    console.log('Valor de IMC incorreto')
}