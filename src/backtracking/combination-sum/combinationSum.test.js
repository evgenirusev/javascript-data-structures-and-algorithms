const combinationSum = require('./combinationSum');

describe("combinationSum function", () => {
    it('should find combinations for target 7', () => {
        const candidates = [2, 3, 6, 7];
        const target = 7;
        const result = combinationSum(candidates, target);
        expect(result).toEqual([[2, 2, 3], [7]]);
    });

    it('should find combinations for target 8', () => {
        const candidates = [2, 3, 5];
        const target = 8;
        const result = combinationSum(candidates, target);
        expect(result).toEqual([[2, 2, 2, 2], [2, 3, 3], [3, 5]]);
    });

    it('should return empty array for target 1 with only candidate 2', () => {
        const candidates = [2];
        const target = 1;
        const result = combinationSum(candidates, target);
        expect(result).toEqual([]);
    });
});
