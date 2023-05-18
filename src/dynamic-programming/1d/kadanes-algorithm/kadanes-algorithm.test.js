const kadanes = require('./kadanes-algorithm');

describe('kadanes algorithm', () => {
  it('returns the maximum sum of a subarray', () => {
    expect(kadanes([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(kadanes([1, 2, 3, 4, 5])).toBe(15);
    expect(kadanes([-1, -2, -3, -4, -5])).toBe(-1);
    expect(kadanes([0, 0, 0, 0, 0])).toBe(0);
    expect(kadanes([10, -2, 3, -4, 7, 2, -5])).toBe(16);
  });

  it('returns the maximum sum when the array contains a single element', () => {
    expect(kadanes([-5])).toBe(-5);
    expect(kadanes([10])).toBe(10);
  });
});