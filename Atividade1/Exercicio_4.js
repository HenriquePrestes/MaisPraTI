// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada

const prompt = require('prompt-sync')()


let menu = Number(prompt('Qual menu você quer acessar ? 1 - Qual turma eu pertenço ? / 2 - Aulas + praTI / 3 - SAIR - '))

switch (menu) {
    case 1 :
        console.log("Você percente a Turma 2 ");
        break;
    case 2 :
        console.log("Todas as segundas, terças e quintas, das 20:45 as 22:30");
        break;
    case 3 :
        console.log("Saindo...");
        break;
        default:
            console.log("Opção inválida")
}