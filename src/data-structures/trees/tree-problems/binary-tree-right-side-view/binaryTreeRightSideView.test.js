const binaryTreeRightSideView = require('./binaryTreeRightSideView');
const TreeNode = require('../TreeNode');

describe('binaryTreeRightSideView', () => {
  it('should return an empty array for an empty tree', () => {
    const root = null;
    const expected = [];
    const result = binaryTreeRightSideView(root);
    expect(result).toEqual(expected);
  });

  it('should return the correct right side view for a tree with a single node', () => {
    const root = new TreeNode(1);
    const expected = [1];
    const result = binaryTreeRightSideView(root);
    expect(result).toEqual(expected);
  });

  it('should return the correct right side view for a balanced tree', () => {
    // Create a balanced tree
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);

    const expected = [1, 3, 7];
    const result = binaryTreeRightSideView(root);
    expect(result).toEqual(expected);
  });

  it('should return the correct right side view for an unbalanced tree', () => {
    // Create an unbalanced tree
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(4);
    root.left.left.right = new TreeNode(5);

    const expected = [1, 2, 4, 5];
    const result = binaryTreeRightSideView(root);
    expect(result).toEqual(expected);
  });
});
