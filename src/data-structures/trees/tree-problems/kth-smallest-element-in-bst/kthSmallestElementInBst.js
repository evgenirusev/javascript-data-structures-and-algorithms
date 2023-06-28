/**
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst
 * Time complexity - O(n)
 * Space complexit - O(n)
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function kthSmallest(root, k) {
    const stack = [];
    let curr = root;
    while (curr !== null || stack.length > 0) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }

        curr = stack.pop();

        if (--k === 0)
            return curr.val;
        
        curr = curr.right;
    }
    
    return null;
}

module.exports = kthSmallest;