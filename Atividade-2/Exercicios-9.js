// 9. Conversão Entre Formatos
// Escreva duas funções:

// - ParesParaObjeto(pares) recebe um array de pares [ [chave, valor], ... ] e retorna o objeto equivalente.
// - ObjetoParaPares(obj) faz o inverso, retornando um array depares.

const pares = [
    ["Numero 1", "Numero 2"],
    ["Numero 3", "Numero 4"],
    ["Numero 5", "Numero 6"]
]

const obj = {
    numero0: "Numero 0",
    numero1: "Numero 1",
    numero2: "Numero 2"
}

function paresParaObjeto(pares){
    let objeto = {}

    for(par of pares){
        objeto[par[0]] = par[1]
    }
    return objeto
}

function objetoParaPares(obj){
    let pares = []

    for(par in obj){
        pares.push([par, obj[par]])
    }

    return pares
}

console.log(paresParaObjeto(pares))
console.log(objetoParaPares(obj))