const rob = require('./houseRobber');

describe("rob function", () => {
    it('should return 0 for an empty array', () => {
        expect(rob([])).toBe(0);
    });

    it('should return the only element for an array with one element', () => {
        expect(rob([5])).toBe(5);
    });

    it('should return the correct maximum amount for a non-empty array', () => {
        expect(rob([2, 7, 9, 3, 1])).toBe(11);
    });
});