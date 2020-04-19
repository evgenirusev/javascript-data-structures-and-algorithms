const DisjointSet = require("./DisjointSet");

describe('DisjointSet', () => {
    let disjointSet;
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

        disjointSet = new DisjointSet(mockNodes);
    });

    it('should be connected', () => {
        disjointSet.union(1, 2);
        disjointSet.union(2, 3);
        expect(disjointSet.areConnected(1, 2)).toBe(true);
        expect(disjointSet.areConnected(1, 3)).toBe(true);
        expect(disjointSet.areConnected(3, 2)).toBe(true);
    });

    it('should be connected', () => {
        disjointSet.addNode(
            {
                id: 5,
                data: 123
            }
        );

        disjointSet.union(1, 5);
        disjointSet.union(1, 2);
        expect(disjointSet.areConnected(2, 5)).toBe(true);
    });
});