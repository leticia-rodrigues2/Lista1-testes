function isPrime(numero) {
    if (numero <= 1) {
      return false;
    }
    
    for (let divisor = 2; divisor <= Math.sqrt(numero); divisor++) {
      if (numero % divisor === 0) {
        return false;
      }
    }
    
    return true;
  }
  export default isPrime