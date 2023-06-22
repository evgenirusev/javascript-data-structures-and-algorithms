/**
 * 
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function isSubtree(root, subRoot) {
    if (!root || !subRoot)
        return false;

    if (isSameTree(root, subRoot))
        return true;

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function isSameTree(p, q) {
    if (!p && !q)
        return true;
    if (!p || !q)
        return false;

    return (p.val == q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}