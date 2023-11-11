const longestCommonSubsequence = require('./longestCommonSubsequence');

describe("longestCommonSubsequence", () => {
    it('should return the lcs with the simplest case', () => {
        expect(longestCommonSubsequence("abcde", "ace")).toBe(3);
    });

    it('should return the lcs with case where the first string must be compared to second', () => {
        expect(longestCommonSubsequence("abcdefghij", "ecdgi")).toBe(4);
    });
});
