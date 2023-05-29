const threeSum = require('./threeSum');

describe('threeSum', () => {
  it('returns an array of unique triplets that sum to zero', () => {
    // Test Case 1
    const nums1 = [0, 0, 0];
    expect(threeSum(nums1)).toEqual([[0, 0, 0]]);

    // Test Case 2
    const nums2 = [-1, 0, 0, 2];
    expect(threeSum(nums2)).toEqual([[-1, 0, 1]]);

    // Test Case 3
    const nums3 = [-4, -1, -1, 0];
    expect(threeSum(nums3)).toEqual([[-1, -1, 2]]);

    // Test Case 4
    const nums4 = [-4, -1, -1, 0, 1, 2, 4];
    expect(threeSum(nums4)).toEqual([[-1, -1, 2], [-4, 0, 4]]);

    // Test Case 5
    const nums5 = [-4, -1, -1, 0, 0, 0, 1, 2, 7, 9, 10, 20];
    expect(threeSum(nums5)).toEqual([
      [-4, -1, 5],
      [-4, 0, 4],
      [-4, 1, 3],
      [-4, 2, 2],
      [-1, -1, 2],
      [-1, 0, 1],
      [0, 0, 0],
    ]);
  });
});