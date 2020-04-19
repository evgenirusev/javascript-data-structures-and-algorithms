const DisjointSet = require("./DisjointSet");

describe('DisjointSet', () => {
    it('should be connected', () => {
        const nodes = [
            {
                id: 1,
                data: 123
            },
            {
                id: 2,
                data: 123
            }
        ];

        const disjointSet = new DisjointSet(nodes);
        disjointSet.union(1, 2);
        expect(disjointSet.areConnected(1, 2)).toBe(true);
    });
});