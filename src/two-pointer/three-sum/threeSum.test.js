const threeSum = require('./threeSum');

describe('Three Sum', () => {
  it('should return the correct triplets', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual(expect.arrayContaining([[-1, -1, 2], [-1, 0, 1]]));
  });

  it('should return an empty array when input array is empty', () => {
    expect(threeSum([])).toEqual(expect.arrayContaining([]));
  });

  it('should return an empty array when input array has only one element', () => {
    expect(threeSum([0])).toEqual(expect.arrayContaining([]));
  });

  it('should return the correct triplet when input array has all elements as zeros', () => {
    expect(threeSum([0, 0, 0, 0])).toEqual(expect.arrayContaining([[0, 0, 0]]));
  });

  it('should return an empty array when no triplet sums to zero', () => {
    expect(threeSum([1, 2, -2, -1])).toEqual(expect.arrayContaining([]));
  });
});
