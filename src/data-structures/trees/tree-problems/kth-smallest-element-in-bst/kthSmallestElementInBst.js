/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function kthSmallest(root, k) {
    let currentCount = 0;
    const stack = [];
    let curr = root;
    while (curr !== null || stack.length > 0) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }

        curr = stack.pop();

        if (++currentCount === k)
            return curr.val;
        
        curr = curr.right;
    }
    
    return null;
}

module.exports = kthSmallest;