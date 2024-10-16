const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite os números separados por vírgula: ", (numerosString) => {
  const numeros = numerosString.split(',').map(Number);

  const maiorValor = Math.max(...numeros);
  const indiceMaior = numeros.indexOf(maiorValor);

  const menorValor = Math.min(...numeros);
  const indiceMenor = numeros.indexOf(menorValor);

  console.log(`O maior valor (${maiorValor}) está no índice ${indiceMaior}`);
  console.log(`O menor valor (${menorValor}) está no índice ${indiceMenor}`);

  rl.close();
});