
import factorial from "./Factorial";
describe('factorial', () => {
    it('should correctly calculates the factorial of a positive number', () => {
      expect(factorial(0)).toBe(1);
      expect(factorial(1)).toBe(1);
      expect(factorial(2)).toBe(2);
      expect(factorial(3)).toBe(6);
      expect(factorial(4)).toBe(24);
      expect(factorial(5)).toBe(120);
    });
  
    it('should returns error for negative numbers', () => {
      expect(() => factorial(-1)).toThrow('Not exist factorial negative number');
      expect(() => fatorial(-5)).toThrow('Not exist factorial negative number');
    });
  });