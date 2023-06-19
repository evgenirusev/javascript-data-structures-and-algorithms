const TreeNode = require('../TreeNode');

/**
 * 
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) {
        return null;
    }
    
    invertTreeRecursive(root);
    return root;
};

function invertTreeRecursive(node) {
    if (node === null) {
        return;
    }
    
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    
    invertTreeRecursive(node.left);
    invertTreeRecursive(node.right);
}

module.exports = invertTree;