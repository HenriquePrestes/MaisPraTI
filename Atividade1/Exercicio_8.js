//  8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//  e escreve-los em ordem crescente.

const prompt = require('prompt-sync')()

let valor1 = Number(prompt('Digite um valor: '))
let valor2 = Number(prompt('Digite outro valor: '))

if (valor1 === valor2) {
    console.log('Valores não podem ser iguais! Tente novamente');
} else if (valor1 < valor2) {
    console.log(`Valores em ordem crescente: ${valor1}, ${valor2}`);   
} else {
    console.log(`Valores em ordem crescente: ${valor2}, ${valor1}`);
}
