const validPalindrome = require('./validPalindrome');

describe('Leetcode Problem 125: Valid Palindrome', () => {
    it('should return true for a valid palindrome', () => {
        const input = 'A man, a plan, a canal: Panama';
        const expected = true;
        const result = func.isPalindrome(input);
        expect(result).toBe(expected);
    });

    it('should return true for an empty string', () => {
        const input = '';
        const expected = true;
        const result = func.isPalindrome(input);
        expect(result).toBe(expected);
    });

    it('should return true for a single character', () => {
        const input = 'a';
        const expected = true;
        const result = func.isPalindrome(input);
        expect(result).toBe(expected);
    });

    it('should return false for a non-palindrome string', () => {
        const input = 'racecarx';
        const expected = false;
        const result = func.isPalindrome(input);
        expect(result).toBe(expected);
    });
});
