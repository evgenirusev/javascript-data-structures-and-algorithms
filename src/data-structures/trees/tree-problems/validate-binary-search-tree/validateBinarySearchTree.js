/**
 * https://leetcode.com/problems/validate-binary-search-tree
 * Time complexity - O(n)
 * Space complexity - O(h)
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function(root) {
    return validate(root, -Infinity, Infinity);
};

const validate = (node, min, max) => {
    if (!node)
        return true;

    if (node.val <= min || node.val >= max)
        return false;

    return validate(node.left, min, node.val) 
        && validate(node.right, node.val, max);
};

module.exports = isValidBST;