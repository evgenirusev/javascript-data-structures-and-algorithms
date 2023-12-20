const minimizeMax = require('./minimizeTheMaximumDifferenceOfPairs');

describe("minimizeMax", () => {
  it('should return 3 when given [1, 3, 6, 19] and p = 3', () => {
    const nums = [1, 3, 6, 19];
    const p = 3;
    expect(minimizeMax(nums, p)).toBe(3);
  });

  it('should return 5 when given [2, 5, 8, 10] and p = 2', () => {
    const nums = [2, 5, 8, 10];
    const p = 2;
    expect(minimizeMax(nums, p)).toBe(5);
  });

  it('should return 7 when given [1, 2, 3, 4, 5] and p = 1', () => {
    const nums = [1, 2, 3, 4, 5];
    const p = 1;
    expect(minimizeMax(nums, p)).toBe(7);
  });

  it('should return 1 when given [1, 1, 1] and p = 1', () => {
    const nums = [1, 1, 1];
    const p = 1;
    expect(minimizeMax(nums, p)).toBe(1);
  });
});
