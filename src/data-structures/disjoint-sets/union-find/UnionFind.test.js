const UnionFind = require("./UnionFind");

describe('UnionFind', () => {
    let unionFind;
    
    beforeEach(() => {
        unionFind = new UnionFind(["k1","k3","k5","k2","k4","k12","k8","k9","k7","k6"]);
    });

    it('should find the correct root elements after a union', () => {
        expect(unionFind.findRoot("k1")).toBe("k1");

        unionFind.union("k2", "k4");

        expect(unionFind.findRoot("k2")).toBe("k2");
        expect(unionFind.findRoot("k4")).toBe("k2");

        unionFind.union("k1", "k2");
        expect(unionFind.findRoot("k1")).toBe("k2");
    });

    it('should find k2 to be the root node in the union', () => {
        unionFind.union("k6", "k7");
        unionFind.union("k2", "k4");
        unionFind.union("k8", "k9");
        unionFind.union("k4", "k8");
        unionFind.union("k2", "k3");
        unionFind.union("k7", "k8");

        expect(unionFind.findRoot("k6")).toBe("k2");
        expect(unionFind.findRoot("k2")).toBe("k2");
        expect(unionFind.findRoot("k8")).toBe("k2");
        expect(unionFind.findRoot("k4")).toBe("k2");
        expect(unionFind.findRoot("k2")).toBe("k2");
        expect(unionFind.findRoot("k7")).toBe("k2");
    });

    it('should return correct roots', () => {
        unionFind.union("k6", "k7");
        unionFind.union("k2", "k4");
        unionFind.union("k8", "k9");
        // unionFind.union("k4", "k8") - We remove this connection from the previous test
        unionFind.union("k2", "k3");
        unionFind.union("k7", "k8");

        expect(unionFind.findRoot("k6")).toBe("k6");
        expect(unionFind.findRoot("k2")).toBe("k2");
        expect(unionFind.findRoot("k8")).toBe("k6");
        expect(unionFind.findRoot("k4")).toBe("k2");
        expect(unionFind.findRoot("k2")).toBe("k2");
        expect(unionFind.findRoot("k7")).toBe("k6");
    });
});