/**
 * https://leetcode.com/problems/count-good-nodes-in-binary-tree
 * Time complexity - O(n*h) where h is the height of the tree
 * Space complexity - O(h) where h is the height of the tree
 * @param {TreeNode} root
 * @return {number}
 */
var countGoodNodesInBinaryTree = function(root) {
    const result = [0];
    dfs(root, [], result);
    return result[0];
};

function dfs(node, path, result) {
    if (!node)
        return;

    path.push(node.val);
    
    dfs(node.left, path, result);

    if (!path.some(val => val > node.val))
        result[0]++;

    dfs(node.right, path, result);

    path.pop();
}

module.exports = countGoodNodesInBinaryTree;