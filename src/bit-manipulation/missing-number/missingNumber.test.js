const missingNumber = require('./missing-number');

describe('missingNumber', () => {
    it('Example 1: [3, 0, 1] => 2', () => {
        expect(missingNumber([3, 0, 1])).toBe(2);
    });

    it('Example 2: [0, 1] => 2', () => {
        expect(missingNumber([0, 1])).toBe(2);
    });

    it('Example 3: [9, 6, 4, 2, 3, 5, 7, 0, 1] => 8', () => {
        expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
    });
});