const kthSmallest = require('./kthSmallest');

describe("kthSmallest", () => {
  it('should return the kth smallest element in a BST', () => {
    const root = {
      val: 3,
      left: {
        val: 1,
        left: null,
        right: null
      },
      right: {
        val: 4,
        left: {
          val: 2,
          left: null,
          right: null
        },
        right: null
      }
    };
    expect(kthSmallest(root, 1)).toBe(1);
    expect(kthSmallest(root, 2)).toBe(2);
    expect(kthSmallest(root, 3)).toBe(3);
    expect(kthSmallest(root, 4)).toBe(4);
  });

  it('should return the kth smallest element in a BST when root has only one node', () => {
    const root = {
      val: 5,
      left: null,
      right: null
    };
    expect(kthSmallest(root, 1)).toBe(5);
  });

  it('should return the kth smallest element in a BST when k is larger than the number of nodes', () => {
    const root = {
      val: 2,
      left: {
        val: 1,
        left: null,
        right: null
      },
      right: null
    };
    expect(kthSmallest(root, 3)).toBe(undefined);
  });
});
