const depthFirstSearch = require('./depthFirstSearch');
const graphGenerator = require('../../../data-structures/graphs/graph-mock-generator/graphGenerator.js');

describe('depthFirstSearch', () => {
    it('should traverse the graph in DFS order', () => {
        const graph = graphGenerator.generateWeightedGraph();

        expect(depthFirstSearch(graph, graph.getVertex("k1")))
            .toEqual(["v1", "v6","v7","v12", "v8","v9","v3","v5","v4","v2"]);
    });
});
