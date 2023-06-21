/**
 * https://leetcode.com/problems/diameter-of-binary-tree
 * Time complexity - O(n)
 * Space complexity - O(tree height)
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root, max = [0]) {
    dfs(root, max);
    return max[0];
};

const dfs = (root, max) => {
    if (!root)
        return 0;

    const left = dfs(root.left, max);
    const right = dfs(root.right, max);

    const diameter = left + right;
    max[0] = Math.max(max[0], diameter);

    const height = Math.max(left, right);

    return height + 1;
}

module.exports = diameterOfBinaryTree;