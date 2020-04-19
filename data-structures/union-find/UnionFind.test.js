const UnionFind = require("./UnionFind");

describe('UnionFind', () => {
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

        const unionFind = new UnionFind(nodes);
        unionFind.union(1, 2);
        expect(unionFind.areConnected(1, 2)).toBe(true);
    });
});