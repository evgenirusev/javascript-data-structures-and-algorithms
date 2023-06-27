/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root, min = -Infinity, max = Infinity) {
    if (root === null)
        return true;

    if ((root.val <= min) || (max <= root.val))
        return false;

    return dfs(root, min, max);
};

const dfs = (root, min, max) => {
    const left = isValidBST(root.left, min, root.val);
    const right = isValidBST(root.right, root.val, max);

    return left && right;
}

module.exports = isValidBST;