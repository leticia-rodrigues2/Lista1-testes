import orderedList from "./OrderedList";

describe('orderedList', ()=> {
    it('should  return true for an empty list or with one element', () => {
        expect(orderedList([])).toBe(true);
        expect(orderedList([1])).toBe(true);
      });

      it('should return true for an increasing list', () => {
        expect(orderedList([2, 4, 6, 8])).toBe(true);
      });

      it('should return true for a descending list', () => {
        expect(orderedList([8, 6, 4, 2])).toBe(true);
        
      });

      it('should return false for a list that is not sorted', () => {
        expect(orderedList([2, 6, 4, 9])).toBe(false);
      });
})