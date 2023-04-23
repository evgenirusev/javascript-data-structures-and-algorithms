const bellmanFord = require('./bellman-ford')
const Graph = require("../../../data-structures/graphs/adjacency-list/AdjacencyListGraph")
const Vertex = require("../../../data-structures/graphs/vertex/Vertex.js");
const Edge = require('../../../data-structures/graphs/edge/Edge');

describe('bellmanFord', () => {
    it("should return the correct shortest path", () => {
        const graph = new Graph();
        ["A", "B", "C", "D", "E", "F"].forEach(vertexKey => {
            graph.addVertex(new Vertex(vertexKey));
        });

        graph.addEdge(
            new Edge('A', 'B', 6),
            new Edge('A', 'C', 4),
            new Edge('A', 'D', 5),

            new Edge('B', 'E', -1),

            new Edge('C', 'E', 3),
            new Edge('C', 'B', -2),
            
            new Edge('D', 'C', -2),
            new Edge('D', 'F', -1),

            new Edge('E', 'F', 3),
        );

        
        expect(bellmanFord(graph, 'A')).toEqual({
            'A': 0,
            'B': 1,
            'C': 3,
            'D': 5,
            'E': 0,
            'F': 3
        });
    });
});
