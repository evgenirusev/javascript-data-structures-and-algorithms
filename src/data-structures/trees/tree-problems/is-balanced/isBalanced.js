/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let isHeightBalanced = [true];
    dfs(root, isHeightBalanced);

    return isHeightBalanced[0];
};

function dfs(root, isHeightBalanced) {
    if (!root)
        return 0;

    const left = dfs(root.left, isHeightBalanced);
    const right = dfs(root.right, isHeightBalanced);

    if (Math.abs(left - right) > 1)
        isHeightBalanced[0] = false;

    return 1 + Math.max(left, right);
}

// Alternative solution without a extra param:
// var isBalanced = function(root) {
//     if (!root)
//         return true;
//     return Math.abs(height(root.left) - height(root.right)) < 2
//         && isBalanced(root.left)
//         && isBalanced(root.right);
// };

// function height(root) {
//     if (!root)
//         return 0;
//     return 1 + Math.max(height(root.left), height(root.right));
// }

module.exports = isBalanced;
