const lowestCommonAncestor = require('./lowestCommonAncestor');

describe("lowestCommonAncestor", () => {
  it('returns the lowest common ancestor when it exists', () => {
    // Create a binary tree for testing
    const root = {
      val: 3,
      left: {
        val: 5,
        left: {
          val: 6,
          left: null,
          right: null
        },
        right: {
          val: 2,
          left: {
            val: 7,
            left: null,
            right: null
          },
          right: {
            val: 4,
            left: null,
            right: null
          }
        }
      },
      right: {
        val: 1,
        left: {
          val: 0,
          left: null,
          right: null
        },
        right: {
          val: 8,
          left: null,
          right: null
        }
      }
    };

    const p = { val: 5 };
    const q = { val: 1 };

    const result = lowestCommonAncestor(root, p, q);

    expect(result.val).toBe(3);
  });

  it('returns null when either p or q does not exist in the tree', () => {
    const root = {
      val: 3,
      left: {
        val: 5,
        left: {
          val: 6,
          left: null,
          right: null
        },
        right: {
          val: 2,
          left: {
            val: 7,
            left: null,
            right: null
          },
          right: {
            val: 4,
            left: null,
            right: null
          }
        }
      },
      right: {
        val: 1,
        left: {
          val: 0,
          left: null,
          right: null
        },
        right: {
          val: 8,
          left: null,
          right: null
        }
      }
    };

    const p = { val: 9 };
    const q = { val: 1 };

    const result = lowestCommonAncestor(root, p, q);

    expect(result).toBeNull();
  });

  it('returns the root node when p and q are the same', () => {
    const root = {
      val: 3,
      left: {
        val: 5,
        left: {
          val: 6,
          left: null,
          right: null
        },
        right: {
          val: 2,
          left: {
            val: 7,
            left: null,
            right: null
          },
          right: {
            val: 4,
            left: null,
            right: null
          }
        }
      },
      right: {
        val: 1,
        left: {
          val: 0,
          left: null,
          right: null
        },
        right: {
          val: 8,
          left: null,
          right: null
        }
      }
    };

    const p = { val: 5 };
    const q = { val: 5 };

    const result = lowestCommonAncestor(root, p, q);

    expect(result.val).toBe(5);
  });
});
