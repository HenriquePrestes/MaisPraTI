// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

const vendas = [
  { cliente: 'Luis', total: 157 },
  { cliente: 'João', total: 200 },
  { cliente: 'Henrique', total: 160 },
  { cliente: 'Aline', total: 70 }
];

const totalPorCliente = vendas.reduce((acumulador, venda) => {
  const { cliente, total } = venda;

  if (!acumulador[cliente]) {
    acumulador[cliente] = 0;
  }

  acumulador[cliente] += total;
  return acumulador;
}, { });

console.log(totalPorCliente);