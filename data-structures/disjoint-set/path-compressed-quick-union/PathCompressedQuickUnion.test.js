const PathCompressedQuickUnion = require("./PathCompressedQuickUnion");

describe('PathCompressedQuickUnion', () => {
    let pathCompressedQuickUnion;
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

        pathCompressedQuickUnion = new PathCompressedQuickUnion(mockNodes);
    });

    it('should be connected', () => {
        pathCompressedQuickUnion.union(1, 2);
        pathCompressedQuickUnion.union(2, 3);
        expect(pathCompressedQuickUnion.areConnected(1, 2)).toBe(true);
        expect(pathCompressedQuickUnion.areConnected(1, 3)).toBe(true);
        expect(pathCompressedQuickUnion.areConnected(3, 2)).toBe(true);
    });

    it('should be connected', () => {
        pathCompressedQuickUnion.addNode(
            {
                id: 5,
                data: 123
            }
        );

        pathCompressedQuickUnion.union(1, 5);
        pathCompressedQuickUnion.union(1, 2);
        expect(pathCompressedQuickUnion.areConnected(2, 5)).toBe(true);
    });
});