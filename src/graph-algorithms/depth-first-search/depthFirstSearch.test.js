const depthFirstSearch = require('./depthFirstSearch')
const generateGraph = require('../../data-structures/graphs/adjacency-list/graph-mock-generator/generateGraph.js');

describe('depthFirstSearch', () => {
    it('should traverse the graph in DFS order', () => {
        const graph = generateGraph();

        expect(depthFirstSearch(graph, graph.getVertex("k1")))
            .toEqual([]);
    });
});

