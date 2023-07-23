const climbingStairs = require('./climbingStairs');

describe("climbingStairs", () => {
    it('should return 1 for n = 1', () => {
        expect(climbingStairs(1)).toBe(1);
    });

    it('should return 2 for n = 2', () => {
        expect(climbingStairs(2)).toBe(2);
    });

    it('should return 3 for n = 3', () => {
        expect(climbingStairs(3)).toBe(3);
    });

    it('should return 5 for n = 4', () => {
        expect(climbingStairs(4)).toBe(5);
    });
});
