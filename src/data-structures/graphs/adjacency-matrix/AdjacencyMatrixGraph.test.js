const AdjacencyMatrixGraph = require("./AdjacencyMatrixGraph");

describe("AdjacencyMatrixGraph", () => {
    let graph;

    beforeEach(() => {
        graph = new AdjacencyMatrixGraph(5);
        graph.addEdge(0, 1);
        graph.addEdge(0, 2);
        graph.addEdge(1, 2);
        graph.addEdge(1, 3);
        graph.addEdge(3, 1);
    });

    it("should add edges and retrive the correct amout of vertices", () => {
        graph = new AdjacencyMatrixGraph(5);
        expect(graph.getNumerOfVertices()).toBe(5);
    });

    it("should add edges retrieve the correct edges", () => {
        expect(graph.getAdjacent(0)).toEqual([1, 2]);
        expect(graph.getAdjacent(1)).toEqual([0, 2, 3]);
        expect(graph.getAdjacent(3)).toEqual([1]);
    });

    it("should retrieve the correct vertice adjacentCounts", () => {
        expect(graph.adjacentCount(0)).toBe(2);
        expect(graph.adjacentCount(1)).toBe(3);
        expect(graph.adjacentCount(3)).toBe(1);
    });
});