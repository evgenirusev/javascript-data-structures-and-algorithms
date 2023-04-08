class UnionFind {
    constructor(keys) {
        this.parent = {};
        this.rank = {};

        keys.forEach(key => {
            this.parent[key] = key;
            this.rank[key] = 0;
        });
    }
    
    findRoot(key) {
        if (this.parent[key] !== key) {
            this.parent[key] = this.findRoot(this.parent[key]);
        }

        return this.parent[key];
    }
    
    union(key1, key2) {
        let rootKey1 = this.findRoot(key1);
        let rootKey2 = this.findRoot(key2);

        if (rootKey1 === rootKey2) {
            return;
        }
        if (this.rank[rootKey1] < this.rank[rootKey2]) {
            [rootKey1, rootKey2] = [rootKey2, rootKey1];
        }
        this.parent[rootKey2] = rootKey1;
        if (this.rank[rootKey1] === this.rank[rootKey2]) {
            this.rank[rootKey1]++;
        }
    }
}

module.exports = UnionFind;
