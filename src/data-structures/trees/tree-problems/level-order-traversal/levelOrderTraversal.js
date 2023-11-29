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

    const levelResults = [];

    function dfs(node, level) {
        if (!node)
            return;

        if (!levelResults[level])
            levelResults[level] = [node.val]
        else
            levelResults[level].push(node.val);
        
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }

    dfs(root, 0);

    return levelResults;
};

// var levelOrder = function(root) {
//     if (!root)
//         return [];

//     const levelResults = [];
//     const queue = new Queue();
//     queue.enqueue(root);
//     while (!queue.isEmpty) {
//         const levelQueueLength = queue.length;
//         const levelResult = [];
//         for (let i = 0; i < levelQueueLength; i++) {
//             const node = queue.dequeue();
//             levelResult.push(node.val);
//             if (node.left)
//                 queue.enqueue(node.left)
//             if (node.right)
//                 queue.enqueue(node.right)
//         }

//         levelResults.push(levelResult);
//     }

//     return levelResults;
// };

module.exports = levelOrder;