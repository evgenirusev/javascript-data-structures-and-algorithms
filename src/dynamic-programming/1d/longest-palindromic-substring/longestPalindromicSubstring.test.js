const longestPalindrome = require('./longestPalindrome');

describe("longestPalindrome", () => {
    it('should return the longest palindrome for a given string with odd length', () => {
        const result = longestPalindrome('babad');
        expect(result).toBe('bab');
    });

    it('should return the longest palindrome for a given string with even length', () => {
        const result = longestPalindrome('cbbd');
        expect(result).toBe('bb');
    });

    it('should handle a single character string', () => {
        const result = longestPalindrome('a');
        expect(result).toBe('a');
    });

    it('should handle an empty string', () => {
        const result = longestPalindrome('');
        expect(result).toBe('');
    });

    it('should handle a string with all distinct characters', () => {
        const result = longestPalindrome('abcdefg');
        expect(result).toBe('a');
    });

    it('should handle a string with all same characters', () => {
        const result = longestPalindrome('aaaaaa');
        expect(result).toBe('aaaaaa');
    });
});
