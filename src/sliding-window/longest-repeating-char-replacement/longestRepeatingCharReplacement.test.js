const characterReplacement = require('./longestRepeatingCharReplacement');

describe("longestRepeatingCharReplacement", () => {
  it('should return the maximum length of a substring after replacing at most k characters', () => {
    expect(characterReplacement("ABAB", 2)).toBe(4);
    expect(characterReplacement("AABABBA", 1)).toBe(4);
    expect(characterReplacement("ABCDE", 0)).toBe(1);
    expect(characterReplacement("AAAAAA", 2)).toBe(6);
  });

  it('should return 0 when the string is empty', () => {
    expect(characterReplacement("", 2)).toBe(0);
  });

  it('should return the length of the string when k is greater than or equal to the string length', () => {
    expect(characterReplacement("ABCD", 4)).toBe(4);
    expect(characterReplacement("XYZ", 3)).toBe(3);
    expect(characterReplacement("ABCDE", 5)).toBe(5);
  });
});
