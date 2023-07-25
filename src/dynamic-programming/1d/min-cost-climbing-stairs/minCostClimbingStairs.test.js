const minCostClimbingStairs = require('./minCostClimbingStairs');

describe("minCostClimbingStairs", () => {
    it('should return the correct minimum cost for a simple case', () => {
        const cost = [10, 15, 20];
        expect(minCostClimbingStairs(cost)).toBe(15);
    });

    it('should return the correct minimum cost for another case', () => {
        const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
        expect(minCostClimbingStairs(cost)).toBe(6);
    });

    it('should return the correct minimum cost for an edge case with 1 step', () => {
        const cost = [1];
        expect(minCostClimbingStairs(cost)).toBe(1);
    });

    it('should return the correct minimum cost for an edge case with 2 steps', () => {
        const cost = [1, 2];
        expect(minCostClimbingStairs(cost)).toBe(1);
    });
});
