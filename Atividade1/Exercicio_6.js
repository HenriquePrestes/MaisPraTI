// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
//  formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
//  Isósceles, escaleno ou eqüilátero.

const prompt = require('prompt-sync')()

let A = Number(prompt('Digite o lado A '))
let B = Number(prompt('Digite o lado B '))
let C = Number(prompt('Digite o lado C '))

if (A < B + C && B < A + C && C < A + B) {
    if ( A === B && B === C) {
        console.log('É um equilátero') 
} else if (A == B && A != C || A == C && B != C || B == C && A != C) {
    console.log('É um isósceles')    
} else {
    console.log('É um escaleno') }
}
