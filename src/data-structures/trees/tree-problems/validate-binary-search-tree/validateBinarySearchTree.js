/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    const valid = [true];
    const itemsToCompare = [];
    isValid(root, valid, itemsToCompare);
    return valid[0];
};

function isValid(node, valid, itemsToCompare) {
    if (!node)
        return;

    // Todo: extract in a separate function
    for (const item of itemsToCompare) {
        if ((item.shouldBeGreater && item.val < node.val) || (!item.shouldBeGreater && item.val > node.val) || item.val === node.val)
        valid[0] = false
    }
    
    itemsToCompare.push({
        val: node.val,
        shouldBeGreater: true
    });
    isValid(node.left, valid, itemsToCompare);
    itemsToCompare.pop();

    itemsToCompare.push({
        val: node.val,
        shouldBeGreater: false
    });
    isValid(node.right, valid, itemsToCompare);
    itemsToCompare.pop();
}

module.exports = isValidBST;