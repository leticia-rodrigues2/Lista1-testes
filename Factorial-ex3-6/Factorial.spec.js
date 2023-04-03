
import factorial from "./Factorial";
describe('factorial', () => {
    it('should correctly calculates the factorial number 5', () => {
      expect(factorial(5)).toBe(120);
    });
  
    it('should correctly calculates the factorial number 0', () => {
      expect(factorial(0)).toBe(1);
    });

    it('should returns error for negative numbers', () => {
      expect(() => factorial(-5)).toThrow('Not exist factorial negative number');
    });

    it('should correctly calculates the factorial number 10', () => {
      expect(factorial(10)).toBe(3628800);
    });
  });