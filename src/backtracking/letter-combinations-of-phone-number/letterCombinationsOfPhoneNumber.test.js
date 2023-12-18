const letterCombinations = require('./letterCombinationsOfPhoneNumber');

describe("letterCombinations function", () => {
  it('should return an empty array for an empty input', () => {
    const result = letterCombinations('');
    expect(result).toEqual([]);
  });

  it('should return the correct letter combinations for input "22"', () => {
    const result = letterCombinations('22');
    expect(result).toEqual(['aa', 'ab', 'ac', 'ba', 'bb', 'bc', 'ca', 'cb', 'cc']);
  });
});