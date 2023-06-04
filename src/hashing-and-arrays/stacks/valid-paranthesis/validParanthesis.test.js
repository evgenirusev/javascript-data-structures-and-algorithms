const isValid = require('./isValid');

describe("isValid", () => {
    it('should return true for a valid string', () => {
        expect(isValid("()")).toBe(true);
        expect(isValid("()[]{}")).toBe(true);
        expect(isValid("{[]}")).toBe(true);
    });

    it('should return false for an invalid string', () => {
        expect(isValid("(]")).toBe(false);
        expect(isValid("([)]")).toBe(false);
        expect(isValid("]")).toBe(false);
    });

    it('should return true for an empty string', () => {
        expect(isValid("")).toBe(true);
    });
});

module.exports = isValid;