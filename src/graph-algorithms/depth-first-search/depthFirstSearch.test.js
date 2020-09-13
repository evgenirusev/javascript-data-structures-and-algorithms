const depthFirstSearch = require('./depthFirstSearch')
const generateGraph = require('../../data-structures/graphs/adjacency-list/graph-mock-generator/generateGraph.js');

describe('depthFirstSearch', () => {
    it('should traverse the graph in DFS order', () => {
        const graph = generateGraph();

        expect(depthFirstSearch(graph, graph.getVertex("k1")))
            .toEqual(["v1", "v6","v7","v12", "v8","v9","v3","v5","v4","v2"]);
    });
});
