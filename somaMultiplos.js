function somaMultiplosAteLimite(limite, divisores) {
    let soma = 0;
  
    for (let i = 1; i < limite; i++) {
      if (divisores.some(divisor => i % divisor === 0)) {
        soma += i;
      }
    }
  
    return soma;
  }
  
  const resultado = somaMultiplosAteLimite(1000, [5, 7]);
  console.log("A soma dos múltiplos de 5 ou 7 abaixo de 1000 é:", resultado);