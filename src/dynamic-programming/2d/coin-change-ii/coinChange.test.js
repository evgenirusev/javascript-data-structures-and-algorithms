const change = require('./coinChange');

describe("coinChange", () => {
  it('should return 4 for amount = 5, coins = [1, 2, 5]', () => {
    expect(change(5, [1, 2, 5])).toBe(4);
  });

  it('should return 0 for amount = 3, coins = [2]', () => {
    expect(change(3, [2])).toBe(0);
  });

  it('should correctly calculate coin change without timeout', () => {
    expect(change(500, [3,5,7,8,9,10,11])).toBe(35502874);
  });
});
