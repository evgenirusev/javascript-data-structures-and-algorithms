const levelOrder = require('./levelOrderTraversal');

describe("levelOrder", () => {
  it('returns an empty array if root is null', () => {
    const root = null;
    expect(levelOrder(root)).toEqual([]);
  });

  it('returns the level order traversal of a binary tree', () => {
    // Create a binary tree
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

    const expected = [
      [3],
      [9, 20],
      [15, 7]
    ];

    expect(levelOrder(root)).toEqual(expected);
  });
});
