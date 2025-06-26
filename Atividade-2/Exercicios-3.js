// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

const frase = "olá olá mundo mundo"
let listaDeFrase = frase.split(" ")

let palavrasUnicas = []

for(let i = 0; i < listaDeFrase.length; i++){
    if(!palavrasUnicas.includes(listaDeFrase[i])){
        palavrasUnicas.push(listaDeFrase[i])
    }
}

console.log(palavrasUnicas)
console.log(listaDeFrase)