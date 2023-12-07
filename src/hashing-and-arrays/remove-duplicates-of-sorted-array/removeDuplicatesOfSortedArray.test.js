const removeDuplicates = require('./removeDuplicatesOfSortedArray');

describe("removeDuplicatesOfSortedArray", () => {
    it('should handle an array with no duplicates', () => {
        const nums = [1, 2, 3, 4, 5];
        const result = removeDuplicates(nums);
        expect(result).toBe(5);
        expect(nums).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle an array with duplicates', () => {
        const nums = [1, 1, 2, 2, 3, 4, 5];
        const result = removeDuplicates(nums);
        expect(result).toBe(5);
        expect(nums).toEqual([1, 2, 3, 4, 5, 4, 5]); // The first five elements should be unique
    });

    it('should handle an array with all duplicates', () => {
        const nums = [1, 1, 1, 1, 1];
        const result = removeDuplicates(nums);
        expect(result).toBe(1);
        expect(nums).toEqual([1, 1, 1, 1, 1]); // Only the first element should remain
    });
});
