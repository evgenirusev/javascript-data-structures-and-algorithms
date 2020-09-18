const depthFirstSearch = require('./depthFirstSearch');
const generateGraph = require('../../../data-structures/graphs/adjacency-list/graph-mock-generator/generateGraph.js');

describe('depthFirstSearch', () => { 
    it('should traverse in DFS order', () => {
        const graph = generateGraph.generateWeightedGraph();

        expect(depthFirstSearch(graph, graph.getVertex("k1")))
            .toEqual(["v1", "v2", "v3", "v4", "v5", "v6", "v9", "v7", "v8", "v12"]);
    }); 
});
