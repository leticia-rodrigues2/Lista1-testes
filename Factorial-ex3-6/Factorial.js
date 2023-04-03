function factorial(n) {
    if (n < 0) {
      throw new Error('Not exist factorial negative number');
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }

  
export default factorial;