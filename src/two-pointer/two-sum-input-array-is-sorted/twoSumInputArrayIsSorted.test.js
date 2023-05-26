const twoSumInputArrayIsSorted = require('./twoSumInputArrayIsSorted');

describe('167. Two Sum II - Input Array Is Sorted', () => {
    it('should return the correct indices when target is found', () => {
        const numbers = [2, 7, 11, 15];
        const target = 9;
        const expected = [1, 2];

        expect(twoSumInputArrayIsSorted(numbers, target)).toEqual(expected);
    });

    it('should return the correct indices when target is found at the beginning', () => {
        const numbers = [1, 2, 3, 4, 5];
        const target = 3;
        const expected = [1, 2];

        expect(twoSumInputArrayIsSorted(numbers, target)).toEqual(expected);
    });
});
