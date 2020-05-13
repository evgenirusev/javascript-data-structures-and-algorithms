const BalancedQuickUnionTree = require("./BalancedQuickUnionTree");

describe('BalancedQuickUnionTree', () => {
    let balancedQuickUnionTree;
    let mockNodes;

    beforeEach(() => {
        mockNodes = [
            {
                id: 1,
                data: 123
            },
            {
                id: 2,
                data: 123
            },
            {
                id: 3,
                data: 123
            },
            {
                id: 4,
                data: 123
            },
        ];

        balancedQuickUnionTree = new BalancedQuickUnionTree(mockNodes);
    });

    it('should be connected', () => {
        balancedQuickUnionTree.union(1, 2);
        balancedQuickUnionTree.union(2, 3);
        expect(balancedQuickUnionTree.areConnected(1, 2)).toBe(true);
        expect(balancedQuickUnionTree.areConnected(1, 3)).toBe(true);
        expect(balancedQuickUnionTree.areConnected(3, 2)).toBe(true);
    });

    it('should be connected', () => {
        balancedQuickUnionTree.addNode(
            {
                id: 5,
                data: 123
            }
        );

        balancedQuickUnionTree.union(1, 5);
        balancedQuickUnionTree.union(1, 2);
        expect(balancedQuickUnionTree.areConnected(2, 5)).toBe(true);
    });
});