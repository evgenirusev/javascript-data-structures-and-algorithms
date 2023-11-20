const change = require('./coinChange');

describe("coinChange", () => {
  it('should return 4 for amount = 5, coins = [1, 2, 5]', () => {
    expect(change(5, [1, 2, 5])).toBe(4);
  });

  it('should return 0 for amount = 3, coins = [2]', () => {
    expect(change(3, [2])).toBe(0);
  });
});
