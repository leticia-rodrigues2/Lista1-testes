import calculateMedia from "./AverageValuesList";

describe('calculateMedia', () => {  
  it('should calculates the average of a list with positive numbers', () => {
        expect(calculateMedia([8, 9, 10, 11, 12])).toBe(10)
    });
    it('should calculates the average of a list with negative numbers', () => {
        expect(calculateMedia([-1, -2, -3, -4, -5])).toBe(-3)
    });
    it('should calculates the average of a list with positive and negative numbers', () => {
        expect(calculateMedia([-1, 2, -3, 4, -5])).toBe(-0.6)
    });
    it('should calculates the average of an empty list', () => {
        expect(calculateMedia([])).toBe(0)
    });
});