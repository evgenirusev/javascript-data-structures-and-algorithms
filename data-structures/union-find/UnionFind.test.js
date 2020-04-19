const UnionFind = require("./UnionFind");

describe('UnionFind', () => {
    it('should be connected', () => {
        const unionFind = new UnionFind(5);
        unionFind.union(1, 2);
        expect(unionFind.areConnected(1, 2)).toBe(true);
    });
});