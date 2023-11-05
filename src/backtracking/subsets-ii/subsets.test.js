const subsetsWithDup = require('./subsets');

describe('subsetsWithDup', () => {
  it('returns correct subsets for an input array with duplicates', () => {
    const result = subsetsWithDup([1, 2, 2]);
    expect(result).toEqual([[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]);
  });

  it('returns correct subsets for an input array without duplicates', () => {
    const result = subsetsWithDup([1, 2, 3]);
    expect(result).toEqual([[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]);
  });
});
