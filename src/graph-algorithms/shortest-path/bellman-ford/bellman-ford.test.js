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

        [
            new Edge('A', 'B', 6),
            new Edge('A', 'C', 4),
            new Edge('A', 'D', 5),

            new Edge('B', 'E', -1),

            new Edge('C', 'E', 3),
            new Edge('C', 'B', -2),
            
            new Edge('D', 'C', -2),
            new Edge('D', 'F', -1),

            new Edge('E', 'F', 3)
        ].forEach(edge => {
            graph.addEdge(edge);
        });
        
        expect(bellmanFord(graph, 'A')).toEqual({
            'A': 0,
            'B': 1,
            'C': 3,
            'D': 5,
            'E': 0,
            'F': 3
        });
    });

    it('should throw an error when a negative weight cycle is present', () => {
        const graph = new Graph();
        ["A", "B", "C", "D", "E"].forEach(vertexKey => {
          graph.addVertex(new Vertex(vertexKey));
        });
      
        [
          new Edge('A', 'B', 6),
          new Edge('A', 'C', 4),
          new Edge('B', 'C', -2),  // negative cycle
          new Edge('C', 'D', 1),
          new Edge('D', 'C', -5),  // negative cycle
          new Edge('D', 'E', 3)
        ].forEach(edge => {
          graph.addEdge(edge);
        });
      
        expect(() => bellmanFord(graph, 'A')).toThrowError('Negative weight cycle detected');
      });
      
    it("should return the correct shortest path", () => {
        const graph = new Graph();
        ["A", "B", "C", "D"].forEach(vertexKey => {
            graph.addVertex(new Vertex(vertexKey));
        });

        [
            new Edge('A', 'B', 4),
            new Edge('A', 'C', 3),

            new Edge('B', 'D', 7),

            new Edge('C', 'B', 7),
            
            new Edge('D', 'C', -15)
        ].forEach(edge => {
            graph.addEdge(edge);
        });

        expect(() => bellmanFord(graph, 'A'))
            .toThrowError('Negative cycle detected');
    });
});
