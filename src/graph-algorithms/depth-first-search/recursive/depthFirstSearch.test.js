const depthFirstSearch = require('./depthFirstSearch');
const graphGenerator = require('../../../data-structures/graphs/graph-mock-generator/graphGenerator.js');

describe('depthFirstSearch', () => { 
    it('should traverse in DFS order', () => {
        const graph = graphGenerator.generateWeightedGraph();

        expect(depthFirstSearch(graph, graph.getVertex("k1")))
            .toEqual(["v1", "v2", "v3", "v4", "v5", "v6", "v9", "v7", "v8", "v12"]);
    }); 
});
