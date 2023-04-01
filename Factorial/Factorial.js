function factorial(n) {
    if (n < 0) {
      throw new Error('Não existe fatorial de número negativo');
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }

  
export default factorial;