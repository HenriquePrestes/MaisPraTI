// Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let meuChute;
let tentativas = 0;

const prompt = require('prompt-sync')(); 

while (meuChute != numeroSecreto) {
    meuChute = parseInt(prompt("Advinha qual é o número secreto entre 1 e 100: "));
    tentativas++

    if (meuChute < numeroSecreto) {
        console.log("Mais alto!");
} else if ( meuChute > numeroSecreto){
    console.log("Mais baixo!");
} else {
    console.log(`Você acertou o número secreto que é ${numeroSecreto} em ${tentativas} tentativas!`);
    }

}