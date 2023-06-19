const invertTree = require('./invertTree');

describe('invertTree', () => {
  it('should invert a binary tree with multiple nodes', () => {
    /*
     * Input:
     *       4
     *     /   \
     *    2     7
     *   / \   / \
     *  1   3 6   9
     *
     * Output:
     *       4
     *     /   \
     *    7     2
     *   / \   / \
     *  9   6 3   1
     */
    const root = {
      val: 4,
      left: {
        val: 2,
        left: { val: 1, left: null, right: null },
        right: { val: 3, left: null, right: null },
      },
      right: {
        val: 7,
        left: { val: 6, left: null, right: null },
        right: { val: 9, left: null, right: null },
      },
    };

    const expectedOutput = {
      val: 4,
      left: {
        val: 7,
        left: { val: 9, left: null, right: null },
        right: { val: 6, left: null, right: null },
      },
      right: {
        val: 2,
        left: { val: 3, left: null, right: null },
        right: { val: 1, left: null, right: null },
      },
    };

    expect(invertTree(root)).toEqual(expectedOutput);
  });

  it('should invert a binary tree with a single node', () => {
    /*
     * Input:
     *   1
     *
     * Output:
     *   1
     */
    const root = { val: 1, left: null, right: null };

    expect(invertTree(root)).toEqual(root);
  });

  it('should handle an empty binary tree', () => {
    const root = null;

    expect(invertTree(root)).toEqual(null);
  });
});
