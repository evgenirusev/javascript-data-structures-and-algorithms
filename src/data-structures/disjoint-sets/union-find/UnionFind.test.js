const UnionFind = require("./UnionFind");

describe('UnionFind', () => {
    let unionFind;
    
    beforeEach(() => {
        unionFind = new UnionFind(["k1","k3","k5","k2","k4","k12","k8","k9","k7","k6"]);
    });

    it('should find the correct root element', () => {
        expect(unionFind.findRoot("k1")).toBe("k1");

        unionFind.union("k2", "k4");

        expect(unionFind.findRoot("k2")).toBe("k2");
        expect(unionFind.findRoot("k4")).toBe("k2");
    });
});