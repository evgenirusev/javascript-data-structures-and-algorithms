const diameterOfBinaryTree = require('./diameterOfBinaryTree');

describe("diameterOfBinaryTree", () => {
  it('returns 0 for an empty tree', () => {
    expect(diameterOfBinaryTree(null)).toBe(0);
  });

  it('returns 0 for a tree with only one node', () => {
    const root = { val: 1, left: null, right: null };
    expect(diameterOfBinaryTree(root)).toBe(0);
  });

  it('returns the correct diameter for a tree with multiple nodes', () => {
    const root = {
      val: 1,
      left: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: { val: 5, left: null, right: null }
      },
      right: { val: 3, left: null, right: null }
    };
    expect(diameterOfBinaryTree(root)).toBe(3);
  });

  it('returns the correct diameter for a tree with negative values', () => {
    const root = {
      val: -1,
      left: {
        val: -2,
        left: { val: -4, left: null, right: null },
        right: { val: -5, left: null, right: null }
      },
      right: { val: -3, left: null, right: null }
    };
    expect(diameterOfBinaryTree(root)).toBe(3);
  });
});
