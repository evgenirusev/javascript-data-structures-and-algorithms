/**
 * https://leetcode.com/problems/insert-into-a-binary-search-tree
 * Time complexity - O(H)
 * Space complexity - O(H)
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (!root)
        return new TreeNode(val);
    
    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }

    return root;
};