const lengthOfLIS = require('./longestIncreasingSubsequence');

describe("lengthOfLIS", () => {
    it('should return the length of the longest increasing subsequence', () => {
        const nums = [10, 9, 2, 5, 3, 7, 101, 18];
        const result = lengthOfLIS(nums);
        expect(result).toBe(4);
    });

    it('should handle an array with one element and return 1', () => {
        const nums = [5];
        const result = lengthOfLIS(nums);
        expect(result).toBe(1);
    });

    it('should handle an array with all elements in descending order and return 1', () => {
        const nums = [5, 4, 3, 2, 1];
        const result = lengthOfLIS(nums);
        expect(result).toBe(1);
    });

    it('should handle an array with all elements in ascending order and return the length of the array', () => {
        const nums = [1, 2, 3, 4, 5];
        const result = lengthOfLIS(nums);
        expect(result).toBe(nums.length);
    });
});
