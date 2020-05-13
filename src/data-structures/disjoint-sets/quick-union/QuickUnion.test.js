const QuickUnion = require("./QuickUnion");

describe('QuickUnion', () => {
    let quickUnion;
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

        quickUnion = new QuickUnion(mockNodes);
    });

    it('should be connected', () => {
        quickUnion.union(1, 2);
        quickUnion.union(2, 3);
        expect(quickUnion.areConnected(1, 2)).toBe(true);
        expect(quickUnion.areConnected(1, 3)).toBe(true);
        expect(quickUnion.areConnected(3, 2)).toBe(true);
    });

    it('should be connected', () => {
        quickUnion.addNode(
            {
                id: 5,
                data: 123
            }
        );

        quickUnion.union(1, 5);
        quickUnion.union(1, 2);
        expect(quickUnion.areConnected(2, 5)).toBe(true);
    });
});