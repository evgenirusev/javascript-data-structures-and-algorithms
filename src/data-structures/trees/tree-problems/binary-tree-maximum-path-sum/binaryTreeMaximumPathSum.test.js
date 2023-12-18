const maxPathSum = require('./binaryTreeMaximumPathSum');

describe('binaryTreeMaximumPathSum', () => {
  it('should return the correct result for a simple binary tree', () => {
    const root = {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: { val: 3, left: null, right: null },
    };
    expect(maxPathSum(root)).toBe(6);
  });

  it('should return the correct result for a more complex binary tree', () => {
    const root = {
      val: -10,
      left: {
        val: 9,
        left: null,
        right: {
          val: 20,
          left: { val: 15, left: null, right: null },
          right: { val: 7, left: null, right: null },
        },
      },
      right: null,
    };
    expect(maxPathSum(root)).toBe(42);
  });

  it('should return 0 for an empty tree', () => {
    expect(maxPathSum(null)).toBe(0);
  });
});
