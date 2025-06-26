// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function digaOi(nome) {
  console.log(`Oi, ${nome}`);
}

function debounce(fn, delay){
    let timeoutId

    return function(...args){
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
      fn(...args); 
    }, delay);
  };
}

const digaOiComDelay = debounce(digaOi, 3000); 

digaOiComDelay("Henrique");
digaOiComDelay("Henrique");
digaOiComDelay("Henrique");