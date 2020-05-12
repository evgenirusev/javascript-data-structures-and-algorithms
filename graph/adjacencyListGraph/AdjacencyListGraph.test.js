const AdjacencyListGraph = require("./AdjacencyListGraph");

describe("AdjacencyListGraph", () => {
    let adjacencyListGraph;

    it("should add edges and retrive the correct amout of vertices", () => {
        adjacencyListGraph = new AdjacencyListGraph(5);
        expect(adjacencyListGraph.getNumerOfVertices()).toBe(5);
    });

    it("should add edges and retrive the correct amout of vertices", () => {
        adjacencyListGraph = new AdjacencyListGraph(5);
        adjacencyListGraph.addEdge(0, 1);
        adjacencyListGraph.addEdge(0, 2);
        adjacencyListGraph.addEdge(1, 2);
        adjacencyListGraph.addEdge(1, 3);
        adjacencyListGraph.addEdge(3, 1);
    });
});