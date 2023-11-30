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
 * @return {TreeNode}
 * Time complexity - O(n)
 * Space complexity - O(n) due to recursive call stack
 */
var convertBST = function(root) {
    let greaterValue = 0;

    function dfs(node) {
        if (!node)
            return;

        dfs(node.right);
        greaterValue += node.val;
        node.val = greaterValue;
        dfs(node.left);
    }

    dfs(root);

    return root;
};

module.exports = convertBST;