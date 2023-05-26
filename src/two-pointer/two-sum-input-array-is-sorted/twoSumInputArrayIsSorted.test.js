const twoSumInputArrayIsSorted = require('./twoSumInputArrayIsSorted');

describe('167. Two Sum II - Input Array Is Sorted', () => {
    it('should return the indices of the two numbers that add up to the target', () => {
        const numbers = [2, 7, 11, 15];
        const target = 9;
        const expected = [1, 2];

        expect(twoSumInputArrayIsSorted(numbers, target)).toEqual(expected);
    });

    it('should return the indices of the two numbers that add up to the target when there are duplicates', () => {
        const numbers = [1, 2, 2, 3, 4];
        const target = 4;
        const expected = [1, 3];

        expect(twoSumInputArrayIsSorted(numbers, target)).toEqual(expected);
    });

    it('should return an empty array if no two numbers add up to the target', () => {
        const numbers = [1, 2, 3, 4];
        const target = 10;
        const expected = [];

        expect(twoSumInputArrayIsSorted(numbers, target)).toEqual(expected);
    });
});
