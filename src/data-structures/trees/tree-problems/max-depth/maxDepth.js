/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree
 * Recursive approach
 * Time complexity - O(n)
 * Space complexity - O(1)
 * @param {TreeNode} root
 * @return {number}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var maxDepth = function(root) {
    if (!root)
        return 0;

    return maxDepthRecursive(root);
};

function maxDepthRecursive(node) {
    if (!node)
        return 0;
    
    return 1 + Math.max(
            maxDepthRecursive(node.left),
            maxDepthRecursive(node.right)
        );
}

module.exports = maxDepth;
