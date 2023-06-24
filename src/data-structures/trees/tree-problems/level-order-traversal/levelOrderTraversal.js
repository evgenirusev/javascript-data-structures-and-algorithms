const Queue = require('../../../queues/with-object-and-pointers/Queue');

/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal
 * Time complexity - O(n)
 * Space complexity - O(n)
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root)
        return [];
    
    const queue = new Queue();
    queue.enqueue(root);
    const result = [];
    while (queue.length > 0) {
        const levelResult = [];
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            let curr = queue.dequeue();
            levelResult.push(curr.val);
            if (curr.left)
                queue.enqueue(curr.left);
            if (curr.right)
                queue.enqueue(curr.right);
        }
        result.push(levelResult);
    }

    return result;
};

module.exports = levelOrder;