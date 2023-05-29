const threeSum = require('./threeSum');

describe('Three Sum', () => {
  it('should return the correct triplets', () => {
      // Test Case 1
      let nums = [-1, 0, 1, 2, -1, -4];
      let expected = [
          [-1, -1, 2],
          [-1, 0, 1]
      ];
      expect(threeSum(nums)).toEqual(expect.arrayContaining(expected));

      // Test Case 2
      nums = [];
      expected = [];
      expect(threeSum(nums)).toEqual(expect.arrayContaining(expected));

      // Test Case 3
      nums = [0];
      expected = [];
      expect(threeSum(nums)).toEqual(expect.arrayContaining(expected));

      // Test Case 4
      nums = [0, 0, 0, 0];
      expected = [[0, 0, 0]];
      expect(threeSum(nums)).toEqual(expect.arrayContaining(expected));

      // Test Case 5
      nums = [1, 2, -2, -1];
      expected = [];
      expect(threeSum(nums)).toEqual(expect.arrayContaining(expected));
  });
});