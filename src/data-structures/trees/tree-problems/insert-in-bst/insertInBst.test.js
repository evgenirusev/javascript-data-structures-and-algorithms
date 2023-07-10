const insertIntoBST = require('./insertInBst');

describe("insertIntoBST", () => {
  it('should insert into an empty BST', () => {
    const root = null;
    const val = 5;
    const expected = { val: 5, left: null, right: null };
    expect(insertIntoBST(root, val)).toEqual(expected);
  });

  it('should insert into a non-empty BST (left side)', () => {
    const root = { val: 5, left: { val: 3, left: null, right: null }, right: null };
    const val = 2;
    const expected = {
      val: 5,
      left: {
        val: 3,
        left: { val: 2, left: null, right: null },
        right: null
      },
      right: null
    };
    expect(insertIntoBST(root, val)).toEqual(expected);
  });

  it('should insert into a non-empty BST (right side)', () => {
    const root = { val: 5, left: null, right: { val: 7, left: null, right: null } };
    const val = 8;
    const expected = {
      val: 5,
      left: null,
      right: {
        val: 7,
        left: null,
        right: { val: 8, left: null, right: null }
      }
    };
    expect(insertIntoBST(root, val)).toEqual(expected);
  });

  it('should insert into a non-empty BST (middle)', () => {
    const root = { val: 5, left: { val: 3, left: null, right: null }, right: null };
    const val = 4;
    const expected = {
      val: 5,
      left: {
        val: 3,
        left: null,
        right: { val: 4, left: null, right: null }
      },
      right: null
    };
    expect(insertIntoBST(root, val)).toEqual(expected);
  });
});
