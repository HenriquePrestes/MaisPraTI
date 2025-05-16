// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//controle if-else.

const prompt = require('prompt-sync')()


let idade = Number(prompt('Digite a idade: '))

if ( idade >= 0 && idade <= 12) {
    console.log ('É uma criança')
} else if ( idade >= 13 && idade <= 17)
    console.log ('É um adolescente')
     else if (idade >= 18 && idade <= 65)
        console.log ('É um adulto ') 
     else if (idade > 65)
        console.log ('É um idoso')