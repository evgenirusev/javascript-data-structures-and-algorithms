const isSameTree = require('./isSameTree');

describe('isSameTree', () => {
  it('returns true for two empty trees', () => {
    expect(isSameTree(null, null)).toBe(true);
  });

  it('returns false if one tree is empty and the other is not', () => {
    const tree1 = {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: null,
    };

    const tree2 = null;

    expect(isSameTree(tree1, tree2)).toBe(false);
    expect(isSameTree(tree2, tree1)).toBe(false);
  });

  it('returns false if the values of corresponding nodes are not equal', () => {
    const tree1 = {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: null,
    };

    const tree2 = {
      val: 1,
      left: null,
      right: { val: 3, left: null, right: null },
    };

    expect(isSameTree(tree1, tree2)).toBe(false);
  });

  it('returns true for identical trees', () => {
    const tree1 = {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: { val: 3, left: null, right: null },
    };

    const tree2 = {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: { val: 3, left: null, right: null },
    };

    expect(isSameTree(tree1, tree2)).toBe(true);
  });
});
