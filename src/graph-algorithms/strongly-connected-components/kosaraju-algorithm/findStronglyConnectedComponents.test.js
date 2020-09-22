const findStronglyConnectedComponents = require('./findStronglyConnectedComponents');
const graphGenerator = require('../../../data-structures/graphs/graph-mock-generator/graphGenerator.js');
const Edge = require('../../../data-structures/graphs/edge/Edge.js');

describe('kosarajuAlgorithm', () => { 
    it('should find the strongly connected components', () => {
        const graph = graphGenerator.generateUnweightedGraph();
        graph.removeEdge(new Edge("k5", "k1", null));
        graph.addEdge(new Edge("k1", "k10", null));
        // graph.removeVertex("k10");

        expect(findStronglyConnectedComponents(graph)).toEqual([
            ["v12"],
            ["v11"],
            ["v8","v9", "v7","v5","v4","v6"],
            ["v3", "v2"],
            ["v10", "v1"]
        ]);
    }); 
});
