const Queue = require('../../../queues/with-object-and-pointers/Queue');

/**
 * https://leetcode.com/problems/binary-tree-right-side-view
 * Time complexity - O(n)
 * Space complexity - O(n)
 * @param {TreeNode} root
 * @return {number[]}
 */
var binaryTreeRightSideView = function(root) {
    const result = []

    if (!root)
        return result;

    var queue = new Queue();
    let curr = root;
    queue.enqueue(curr);
    while (!queue.isEmpty) {
        const nextLevelNodes = [];
        while (!queue.isEmpty) {
            nextLevelNodes.push(queue.dequeue());
        }

        result.push(nextLevelNodes[nextLevelNodes.length - 1].val);

        nextLevelNodes.forEach(node => {
            if (node.left)
                queue.enqueue(node.left)
            if (node.right)
                queue.enqueue(node.right)
        });
    }

    return result;
};

module.exports = binaryTreeRightSideView;