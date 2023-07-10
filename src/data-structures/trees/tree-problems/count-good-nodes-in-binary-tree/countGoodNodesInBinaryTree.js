/**
 * https://leetcode.com/problems/count-good-nodes-in-binary-tree
 * Time complexity - O(n) where h is the height of the tree
 * Space complexity - O(n) where h is the height of the tree
 * @param {TreeNode} root
 * @return {number}
 */
var countGoodNodesInBinaryTree = function(root) {
    const result = [0];
    dfs(root, -Infinity, result);
    return result[0];
};

function dfs(node, maxValSoFar, result) {
    if (!node)
        return;

    if (node.val >= maxValSoFar)
        result[0]++;
    
    dfs(node.left, Math.max(maxValSoFar, node.val), result);
    dfs(node.right, Math.max(maxValSoFar, node.val), result);
}

module.exports = countGoodNodesInBinaryTree;