const kadane = require('./kadanes-algorithm');

describe('Kadane algorithm', () => {
  it('returns the maximum sum of a subarray', () => {
    expect(kadane([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(kadane([1, 2, 3, 4, 5])).toBe(15);
    expect(kadane([-1, -2, -3, -4, -5])).toBe(-1);
    expect(kadane([0, 0, 0, 0, 0])).toBe(0);
    expect(kadane([10, -2, 3, -4, 7, 2, -5])).toBe(16);
  });

  it('returns the maximum sum when the array contains a single element', () => {
    expect(kadane([-5])).toBe(-5);
    expect(kadane([10])).toBe(10);
  });

  it('returns 0 when the array is empty', () => {
    expect(kadane([])).toBe(0);
  });
});