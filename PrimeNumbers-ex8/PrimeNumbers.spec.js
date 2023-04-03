import isPrime from "./PrimeNumbers";

describe('Checks of isPrime function', () => {
  it('should calculates number 1 is not prime', () => {
    expect(isPrime(1)).toBe(false);
  });

  it('should calculates number 2 is prime', () => {
    expect(isPrime(2)).toBe(true);
  });

  it('should calculates number 3 is prime', () => {
    expect(isPrime(3)).toBe(true);
  });

  it('should calculates number 4 is not prime', () => {
    expect(isPrime(4)).toBe(false);
  });

  it('should calculates number 29 is prime', () => {
    expect(isPrime(29)).toBe(true);
  });

  it('should calculates number 30 is not prime', () => {
    expect(isPrime(30)).toBe(false);
  });

  it('should calculates number 37 is prime', () => {
    expect(isPrime(37)).toBe(true);
  });

  it('should calculates number 49 is not prime', () => {
    expect(isPrime(49)).toBe(false);
  });

  it('should calculates number 97 is prime', () => {
    expect(isPrime(97)).toBe(true);
  });

  it('number 100 is not prime', () => {
    expect(isPrime(100)).toBe(false);
  });
});
