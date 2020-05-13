const PathCompressedQuickUnion = require("./PathCompressedQuickUnion");

describe('PathCompressedQuickUnion', () => {
    let pathCompressedQuickUnion;
    let mockNodes;

    beforeEach(() => {
        mockNodes = [
            {
                id: 1,
                data: 5
            },
            {
                id: 2,
                data: 10
            },
            {
                id: 3,
                data: 15
            },
            {
                id: 4,
                data: 20
            },
            {
                id: 5,
                data: 25
            },
            {
                id: 6,
                data: 30
            },
            {
                id: 7,
                data: 35
            },
            {
                id: 8,
                data: 40
            },
            {
                id: 9,
                data: 45
            },
        ];

        pathCompressedQuickUnion = new PathCompressedQuickUnion(mockNodes, (a, b) => a.data - b.data);
    });

    it('should be connected', () => {
        pathCompressedQuickUnion.union(1, 2);
        pathCompressedQuickUnion.union(2, 3);
        expect(pathCompressedQuickUnion.areConnected(1, 2)).toBe(true);
        expect(pathCompressedQuickUnion.areConnected(1, 3)).toBe(true);
        expect(pathCompressedQuickUnion.areConnected(3, 2)).toBe(true);
    });

    it('should be connected', () => {
        pathCompressedQuickUnion.union(1, 5);
        pathCompressedQuickUnion.union(1, 2);
        expect(pathCompressedQuickUnion.areConnected(2, 5)).toBe(true);
    });

    it('should find the largest number in a set', () => {
        const idsToInsert = [
            [3, 4],
            [4, 9],
            [8, 1],
            [2, 3],
            [5, 6],
            [5, 9],
            [7, 3],
            [4, 8],
            [6, 1]
        ]; 
        idsToInsert.forEach(ids => {
            pathCompressedQuickUnion.union(ids[0], ids[1]);
        });

        expect(pathCompressedQuickUnion.highestValueInSet(1)).toBe(45);
        expect(pathCompressedQuickUnion.highestValueInSet(5)).toBe(45);
        expect(pathCompressedQuickUnion.highestValueInSet(9)).toBe(45);
    });
});