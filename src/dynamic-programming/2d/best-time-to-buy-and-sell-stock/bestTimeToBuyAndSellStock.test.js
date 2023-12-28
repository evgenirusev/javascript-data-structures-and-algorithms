const maxProfit = require('./maxProfit'); // Replace './maxProfit' with the correct path to your function file

describe("maxProfit function", () => {
  it('should return 0 for an empty array', () => {
    expect(maxProfit([])).toBe(0);
  });

  it('should return 0 for an array with only one price', () => {
    expect(maxProfit([1,2,3,0,2])).toBe(3);
  });
});