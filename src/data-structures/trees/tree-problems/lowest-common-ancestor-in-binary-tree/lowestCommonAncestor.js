/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree
 * Time complexity - O(n)
 * Space complexity - O(n)
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(node, p, q) {
    if (!node)
        return null;

    if (node.val === p.val || node.val === q.val)
        return node;

    var leftLCA = lowestCommonAncestor(node.left, p, q);
    var rightLCA = lowestCommonAncestor(node.right, p, q);

    if (leftLCA && rightLCA)
        return node;

    return leftLCA ? leftLCA : rightLCA;
}

module.exports = lowestCommonAncestor;
