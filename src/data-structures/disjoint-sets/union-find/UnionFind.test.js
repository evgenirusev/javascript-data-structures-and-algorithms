const UnionFind = require("./UnionFind");

describe('UnionFind', () => {
    let unionFind;
    
    beforeEach(() => {
        unionFind = new UnionFind(5);
    });

    it('should find the correct root element', () => {
        unionFind.union(0, 1);
        unionFind.union(2, 3);
        unionFind.union(1, 2);
        
        expect(unionFind.find(0)).toBe(3);
        expect(unionFind.find(1)).toBe(3);
        expect(unionFind.find(2)).toBe(3);
        expect(unionFind.find(3)).toBe(3);
        expect(unionFind.find(4)).toBe(4);
    });
});