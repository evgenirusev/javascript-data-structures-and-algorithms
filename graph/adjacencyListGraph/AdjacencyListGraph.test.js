const AdjacencyListGraph = require("./AdjacencyListGraph");

describe("AdjacencyListGraph", () => {
    let graph;

    it("should add edges and retrive the correct amout of vertices", () => {
        graph = new AdjacencyListGraph(5);
        expect(graph.getNumerOfVertices()).toBe(5);
    });

    it("should add edges and retrive the correct amout of vertices", () => {
        graph = new AdjacencyListGraph(5);
        graph.addEdge(0, 1);
        graph.addEdge(0, 2);
        graph.addEdge(1, 2);
        graph.addEdge(1, 3);
        graph.addEdge(3, 1);

        expect(graph.getEdges(0)).toEqual([1, 2]);
        expect(graph.getEdges(1)).toEqual([0, 2, 3]);
        expect(graph.getEdges(3)).toEqual([1]);
    });
});