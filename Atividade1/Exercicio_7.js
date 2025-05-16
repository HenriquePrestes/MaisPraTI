// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$0,25 se
//  forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//  compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')()

let maca = 0.30
let macaDesc = 0.25
let quantidadeMaca = Number(prompt('Quantas maças você vai comprar ? '))

if (quantidadeMaca >= 12 )
    console.log('Valor total da compra foi de ', quantidadeMaca * macaDesc) 
    else {
        console.log ('Valor total da compra sem desconto', quantidadeMaca * maca)
    }
    

