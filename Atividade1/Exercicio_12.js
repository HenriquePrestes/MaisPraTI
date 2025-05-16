// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//  10) utilizando um loop for.

const prompt = require('prompt-sync')()

let num1 = Number(prompt('Digite o valor que deseja multiplicar: '))

for ( let i = 1; i <=10; i++){
    console.log(`A tabuada do número ${num1} x ${i} = ${num1 * i}`)
}