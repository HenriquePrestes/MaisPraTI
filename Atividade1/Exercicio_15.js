//  15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
//  Fibonacci utilizando um loop for

const prompt = require('prompt-sync')()

function fibonacci(n) {
    let sequencia = [0, 1]

    for (let i = 2; i < n; i++) {
        sequencia[i] = sequencia[i - 1] + sequencia[i - 2]
    }

    return sequencia
}

console.log(fibonacci(10))