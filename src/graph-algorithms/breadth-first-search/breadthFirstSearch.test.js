const breadthFirstSearch = require('./breadthFirstSearch')
const graphMockGenerators = require('../../data-structures/graphs/adjacency-list/graph-mock-generator/graphGenerator.js');

describe('breadthFirstSearch', () => {
    it('should traverse the graph in BFS order', () => {
        const graph = graphMockGenerators.generateUnweightedGraph();

        expect(breadthFirstSearch(graph, graph.getVertex("k1")))
            .toEqual(['v1', 'v2', 'v3', 'v6', 'v4', 'v5', 'v9', 'v7', 'v8', 'v12']);
    });
});
