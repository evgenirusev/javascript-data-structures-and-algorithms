const isSubtree = require('./isSubtree');

describe("isSubtree", () => {
  it('should return true when the subRoot is an empty tree', () => {
    const root = { val: 1, left: null, right: null };
    const subRoot = null;
    expect(isSubtree(root, subRoot)).toBe(true);
  });

  it('should return true when the subRoot is a single node tree that exists in the root', () => {
    const root = { val: 1, left: null, right: null };
    const subRoot = { val: 1, left: null, right: null };
    expect(isSubtree(root, subRoot)).toBe(true);
  });

  it('should return false when the subRoot is a single node tree that does not exist in the root', () => {
    const root = { val: 2, left: null, right: null };
    const subRoot = { val: 1, left: null, right: null };
    expect(isSubtree(root, subRoot)).toBe(false);
  });

  it('should return true when the subRoot is a subtree of the root', () => {
    const root = { val: 4, left: { val: 1, left: null, right: null }, right: { val: 2, left: null, right: null } };
    const subRoot = { val: 1, left: null, right: null };
    expect(isSubtree(root, subRoot)).toBe(true);
  });

  it('should return false when the subRoot is not a subtree of the root', () => {
    const root = { val: 4, left: { val: 1, left: null, right: null }, right: { val: 2, left: null, right: null } };
    const subRoot = { val: 3, left: null, right: null };
    expect(isSubtree(root, subRoot)).toBe(false);
  });
});
