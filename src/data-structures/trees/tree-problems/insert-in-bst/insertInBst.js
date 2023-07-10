const TreeNode = require('../TreeNode');

/**
 * https://leetcode.com/problems/insert-into-a-binary-search-tree
 * Time complexity - O(H)
 * Space complexity - O(H)
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertInBST = function(root, val) {
    if (!root)
        return new TreeNode(val);
    
    if (val < root.val) {
        root.left = insertInBST(root.left, val);
    } else {
        root.right = insertInBST(root.right, val);
    }

    return root;
};

module.exports = insertInBST;