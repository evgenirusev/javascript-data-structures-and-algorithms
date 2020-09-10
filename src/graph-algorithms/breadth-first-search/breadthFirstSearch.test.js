const breadthFirstSearch = require('./breadthFirstSearch')
const generateGraph = require('../../data-structures/graphs/adjacency-list/graph-mock-generator/generateGraph.js');
const Vertex = require('../../data-structures/graphs/vertex/Vertex.js');
const Edge = require('../../data-structures/graphs/edge/Edge.js');

describe('breadthFirstSearch', () => { 
    it('should traverse the graph in BFS order', () => {
        const graph = generateGraph();

        expect(breadthFirstSearch(graph, graph.getVertex("k1")))
            .toEqual(["v1", "v2", "v3", "v6", "v4", "v5", "v9", "v7", "v1", "v2", "v8"]);
    }); 
});
