const longestCommonSubsequence = require('./longestCommonSubsequence');

describe("longestCommonSubsequence", () => {
    it('should return the length of the common subsequence', () => {
    expect(longestCommonSubsequence("abcde", "ace")).toBe(3);
    });
});
