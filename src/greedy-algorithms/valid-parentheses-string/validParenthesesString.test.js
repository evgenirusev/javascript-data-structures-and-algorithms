const Solution = require('./validParenthesesString');

describe("Solution", () => {
    const solution = new Solution();

    it('should return true for a valid string with balanced parentheses', () => {
        expect(solution.checkValidString("()")).toBe(true);
    });

    it('should return true for a valid string with balanced parentheses and asterisks', () => {
        expect(solution.checkValidString("(*)")).toBe(true);
    });

    it('should return true for a valid string with unbalanced parentheses and asterisks', () => {
        expect(solution.checkValidString("(*))")).toBe(true);
    });

    it('should return false for an invalid string with unbalanced parentheses', () => {
        expect(solution.checkValidString(")(")).toBe(false);
    });

    it('should return false for an invalid string with unbalanced parentheses and asterisks', () => {
        expect(solution.checkValidString("*(*)")).toBe(false);
    });

    it('should return true for an empty string', () => {
        expect(solution.checkValidString("")).toBe(true);
    });

    it('should return true for a string with only asterisks', () => {
        expect(solution.checkValidString("****")).toBe(true);
    });
});