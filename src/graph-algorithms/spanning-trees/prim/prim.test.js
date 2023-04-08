const primFindMinimumWeightTree = require('./prim.js');
const graphGenerator = require('../../../data-structures/graphs/graph-mock-generator/graphGenerator.js');

describe('primFindMinimumWeightTree', () => { 
    it('should return the minimum weight tree', () => {
        const graph = graphGenerator.generateWeightedGraph();

        expect(primFindMinimumWeightTree(graph, graph.getVertex("k1")))
            .toEqual(["k1","k3","k5","k2","k4","k12","k8","k9","k7","k6"]);
    });
});
