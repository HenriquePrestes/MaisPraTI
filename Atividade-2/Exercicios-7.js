// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

let produtos = [ {nome: "Teclado", preco: 59.00}, {nome: "Mouse", preco: 49.00}, {nome: "Monitor", preco: 850.00} ]

produtos = produtos.sort((a, b) => {
    return a.preco - b.preco
})

produtos = produtos.map((value) => {
    return value.nome
})

console.log(produtos)