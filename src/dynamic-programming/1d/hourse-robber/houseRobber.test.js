const rob = require('./rob');

describe("rob function", () => {  
  it('should return the correct result for an array with elements [2, 7, 9, 3, 1]', () => {
    const result = rob([2, 7, 9, 3, 1]);
    expect(result).toBe(12);
  });

  it('should return the correct result for an array with elements [1, 2, 3, 1]', () => {
    const result = rob([1, 2, 3, 1]);
    expect(result).toBe(4);
  });

  it('should return the correct result for an array with elements [2, 1, 1, 2]', () => {
    const result = rob([2, 1, 1, 2]);
    expect(result).toBe(4);
  });
});