const subsets = require('./subsets');

describe('subsets', () => {
  it('should return an array containing all subsets of the input array', () => {
    expect(subsets([1, 2])).toEqual([[], [1], [2], [1, 2]]);
    expect(subsets([1, 2, 3])).toEqual([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]);
    expect(subsets([])).toEqual([[]]);
  });

  it('should return [[]] when the input array is empty', () => {
    expect(subsets([])).toEqual([[]]);
  });
});
