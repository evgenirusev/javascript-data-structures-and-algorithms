const isAnagram = require('./validAnagram');

describe('Valid Anagram', () => {
  it('should return true for empty strings', () => {
    expect(isAnagram('', '')).toBe(true);
  });

  it('should return true for strings with same characters', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
  });

  it('should return false for strings with different characters', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
  });

  it('should return false for strings with different lengths', () => {
    expect(isAnagram('anagram', 'nagarams')).toBe(false);
  });

  it('should return false for strings with same characters but different counts', () => {
    expect(isAnagram('anagram', 'nagaaram')).toBe(false);
  });
});
