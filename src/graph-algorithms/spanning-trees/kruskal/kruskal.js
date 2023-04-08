const UnionFind = require('../../../data-structures/disjoint-sets/union-find/UnionFind');

function kruskalFindMinimumWeightTree(edges, keys) {
    edges.sort((a, b) => a.weight - b.weight);
    const unionFind = new UnionFind(keys);
    
    const minimumWeightTree = [];
    edges.forEach(edge => {
        if (unionFind.findRoot(edge.start) !== unionFind.findRoot(edge.end)) {
            unionFind.union(edge.start, edge.end);

            minimumWeightTree.push(edge.end);
        }
    });

    return minimumWeightTree;
}

module.exports = kruskalFindMinimumWeightTree;