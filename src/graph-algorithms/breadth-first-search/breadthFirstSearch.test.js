const breadthFirstSearch = require('./breadthFirstSearch')
const generateGraph = require('../../data-structures/graphs/adjacency-list/graph-mock-generator/generateGraph.js');
const Vertex = require('../../data-structures/graphs/vertex/Vertex.js');
const Edge = require('../../data-structures/graphs/edge/Edge.js');

describe('breadthFirstSearch', () => { 
    it('should traverse the graph in BFS order', () => {
        const graph = generateGraph();
        const result = [];

        expect(breadthFirstSearch(graph, graph.getVertex("k1")))
            .toEqual([1, 2, 3, 6, 4, 5, 9, 7, 12, 8]);
    }); 
});
