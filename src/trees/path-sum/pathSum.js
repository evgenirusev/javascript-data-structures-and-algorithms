/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.com/problems/path-sum/
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 * Time complexity - O(n)
 * Space complexity - O(1)
 */
var hasPathSum = function(root, sum) {
    if (root == null)
      return false;

    sum -= root.val;
    if ((root.left == null) && (root.right == null))
      return (sum == 0);
      
    return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
};

module.exports = hasPathSum;