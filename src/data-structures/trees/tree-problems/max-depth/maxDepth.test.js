const maxDepth = require('./maxDepth');

describe("maxDepth", () => {
  it('should return 0 for an empty tree', () => {
    const root = null;
    const result = maxDepth(root);
    expect(result).toBe(0);
  });

  it('should return 1 for a tree with only one node', () => {
    const root = { val: 1, left: null, right: null };
    const result = maxDepth(root);
    expect(result).toBe(1);
  });

  it('should return the maximum depth of a binary tree', () => {
    const root = {
      val: 3,
      left: {
        val: 9,
        left: null,
        right: null
      },
      right: {
        val: 20,
        left: {
          val: 15,
          left: null,
          right: null
        },
        right: {
          val: 7,
          left: null,
          right: null
        }
      }
    };
    const result = maxDepth(root);
    expect(result).toBe(3);
  });
});