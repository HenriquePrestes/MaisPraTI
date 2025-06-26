// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.


const prompt = require('prompt-sync')(); 

function ehDataValida (dia, mes, ano) {
    const date = new Date(ano, mes, dia);
    return !isNaN(date.getTime());
}
    var dia = Number(prompt("Dia: "))
    var mes = Number(prompt("Mes: "))
    var ano = Number(prompt("Ano: "))

    if(ehDataValida(dia, mes, ano)){
    console.log(`${dia}/${mes}/${ano} Data válida`)
}else{
    console.log(`${dia}/${mes}/${ano} Data invalida`)
}
if (ano % 400 == 0)
        console.log("É bissexto");
    else if(ano % 4 == 0 && ano % 100!= 0)
        console.log("É bissexto");
    else
        console.log("Não é bissexto");
    
