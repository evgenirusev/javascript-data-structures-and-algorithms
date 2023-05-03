const AdjacencyListGraph = require("../../../data-structures/graphs/adjacency-list/AdjacencyListGraph");
const Edge = require("../../../data-structures/graphs/edge/Edge");
const heldKarp = require("./held-karp");

describe('Traveling Salesman Problem - held karp dynamic programming', () => {
    let graph;

    beforeEach(() => {
        graph = new AdjacencyListGraph(true);
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');
        graph.addVertex('D');
        graph.addVertex('E');
        graph.addEdge(new Edge('A', 'B', 2));
        graph.addEdge(new Edge('A', 'C', 1));
        graph.addEdge(new Edge('A', 'D', 3));
        graph.addEdge(new Edge('A', 'E', 9));
        graph.addEdge(new Edge('B', 'C', 6));
        graph.addEdge(new Edge('B', 'D', 7));
        graph.addEdge(new Edge('B', 'E', 6));
        graph.addEdge(new Edge('C', 'D', 8));
        graph.addEdge(new Edge('C', 'E', 3));
        graph.addEdge(new Edge('D', 'E', 4));
    });

    it('should return the shortest path', () => {
        const result = heldKarp(graph);
        expect(result.distance).toBe(17);
        expect(result.path).toEqual(['A', 'B', 'D', 'E', 'C']);
    });
});