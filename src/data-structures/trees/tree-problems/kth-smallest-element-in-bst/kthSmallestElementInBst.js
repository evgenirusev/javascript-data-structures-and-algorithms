/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function kthSmallest(root, k) {
    const result = [];
    dfs(root, result);
    return result[k - 1];
};

function dfs(node, result) {
    if (!node)
        return;
    
    dfs(node.left, result);
    result.push(node.val);
    dfs(node.right, result);
}

module.exports = kthSmallest;