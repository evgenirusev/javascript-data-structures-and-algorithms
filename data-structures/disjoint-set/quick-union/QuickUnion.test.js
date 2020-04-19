const QuickUnion = require("./QuickUnion");

describe('QuickUnion', () => {
    let QuickUnion;
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

        QuickUnion = new QuickUnion(mockNodes);
    });

    it('should be connected', () => {
        QuickUnion.union(1, 2);
        QuickUnion.union(2, 3);
        expect(QuickUnion.areConnected(1, 2)).toBe(true);
        expect(QuickUnion.areConnected(1, 3)).toBe(true);
        expect(QuickUnion.areConnected(3, 2)).toBe(true);
    });

    it('should be connected', () => {
        QuickUnion.addNode(
            {
                id: 5,
                data: 123
            }
        );

        QuickUnion.union(1, 5);
        QuickUnion.union(1, 2);
        expect(QuickUnion.areConnected(2, 5)).toBe(true);
    });
});