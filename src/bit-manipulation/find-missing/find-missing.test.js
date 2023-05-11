const findMissing = require('./find-missing');

describe('findMissing', () => {
    it('should be 1', () => {
        const result = findMissing([1, 2, 3], [2, 3]);
        expect(result).toBe(1);
    });

    it('should be 3', () => {
        const result = findMissing([1, 2, 3], [1, 2]);
        expect(result).toBe(3);
    });

    it('should be 5', () => {
        const result = findMissing([4, 12, 9, 5, 6], [4, 9, 12, 6]);
        expect(result).toBe(5);
    });
});