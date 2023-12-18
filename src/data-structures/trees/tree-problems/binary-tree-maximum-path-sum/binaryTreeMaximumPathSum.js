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
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxPath = Number.MIN_SAFE_INTEGER;

    function dfs(node) {
        if (!node)
            return 0;

        const leftTotal = Math.max(0, dfs(node.left)); // Consider only positive contributions
        const rightTotal = Math.max(0, dfs(node.right));

        const nodeMax = leftTotal + rightTotal + node.val;
        
        maxPath = Math.max(maxPath, nodeMax);

        return Math.max(leftTotal, rightTotal) + node.val; // Return only one path for recursion
    }

    dfs(root);

    return maxPath;
};

module.exports = maxPathSum;