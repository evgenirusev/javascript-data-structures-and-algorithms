/**
 * https://leetcode.com/problems/diameter-of-binary-tree
 * Time complexity - O(n)
 * Space complexity - O(tree height)
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let max = 0;

    function dfs(node) {
        if (!node)
            return 0;
        
        const leftDiameter = dfs(node.left);
        const rightDiameter = dfs(node.right);
        max = Math.max(max, leftDiameter + rightDiameter)

        return 1 + Math.max(leftDiameter, rightDiameter);
    }

    dfs(root);

    return max;
}

module.exports = diameterOfBinaryTree;