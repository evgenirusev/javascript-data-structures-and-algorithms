const countGoodNodesInBinaryTree = require('./countGoodNodesInBinaryTree');

describe("countGoodNodesInBinaryTree", () => {
    it('returns 0 for empty tree', () => {
        expect(countGoodNodesInBinaryTree(null)).toBe(0);
    });

    it('returns 1 for single node', () => {
        const root = { val: 5, left: null, right: null };
        expect(countGoodNodesInBinaryTree(root)).toBe(1);
    });

    it('returns correct count for a binary tree', () => {
        const root = {
            val: 3,
            left: {
                val: 1,
                left: { val: 3, left: null, right: null },
                right: null
            },
            right: {
                val: 4,
                left: { val: 1, left: null, right: null },
                right: null
            }
        };
        expect(countGoodNodesInBinaryTree(root)).toBe(3);
    });
});
