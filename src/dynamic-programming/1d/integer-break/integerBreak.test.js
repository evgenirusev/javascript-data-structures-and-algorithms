const integerBreak = require('./integerBreak');

describe("integerBreak function", () => {
  
  it('should return 2 when n is 3', () => {
    expect(integerBreak(3)).toEqual(2);
  });

  it('should return 6 when n is 5', () => {
    expect(integerBreak(5)).toEqual(6);
  });

  it('should return the maximum multiplication value for other cases', () => {
    expect(integerBreak(10)).toEqual(36);
    expect(integerBreak(8)).toEqual(18);
  });
});
