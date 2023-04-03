import thisOrdered from "./CheckList";

describe('thisOrdered', ()=> {
    it('should return true for an empty array', () => {
        expect(thisOrdered([])).toBe(true);
      });
      it('should return true for a vector with one element ', () => {
        expect(thisOrdered([1])).toBe(true);
      });
      it('should return true for a vector with sorted numbers ', () => {
        expect(thisOrdered([5,6,7,8])).toBe(true);
        expect(thisOrdered([1,2,3,4])).toBe(true);
      });
      it('should return false for an array with unsorted numbers', () => {
        expect(thisOrdered([8,2,9,4])).toBe(false);
      });
});

// No primeiro caso de teste estamos passando um vetor vazio , e ele deve retornar verdadeiro pois o vetor esta ordenado 
// No segundo caso passo um vetor com apenas um numero nesse caso ele deve retorna true pois com somente um elemento a lista estará ordenada
//No teceiro caso passo um vetor com numeros ordenados 5,6,7,8 e 1,2,3,4 ddessa forma deve retorna true
// Noultimo caso passo uma lista desordenada 8,2,9,4 , nesse caso deve retornar false 