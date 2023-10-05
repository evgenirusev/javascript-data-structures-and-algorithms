const subsets = require('./subsets');

describe('subsets', () => {
  it('should return an array containing all subsets of the input array', () => {
    expect(subsets([1, 2]).sort()).toEqual([[], [1], [2], [1, 2]].sort());
    expect(subsets([1, 2, 3]).sort()).toEqual([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]].sort());
    expect(subsets([])).toEqual([[]]);
  });
});
