//  3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// // "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')()


let Nota = Number(prompt('Qual a nota do aluno ? De 0 a 10 '))

if ( Nota >= 0 && Nota <= 5) {
    console.log ('Reprovado')
} else if ( Nota > 6 && Nota <= 10)
    console.log ('Aprovado') 
    else if ( Nota = 6 )
    console.log('Recuperação')