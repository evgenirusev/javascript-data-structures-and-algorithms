const AdjacencyListGraph = require("./AdjacencyListGraph");

describe("AdjacencyListGraph", () => {
    let adjacencyListGraph;

    beforeEach(() => {
        adjacencyListGraph = new AdjacencyListGraph();
    });

    it("should add edges and retrive the correct amout of vertices", () => {
        adjacencyListGraph.addVertice(1);
        adjacencyListGraph.addVertice(2);
        adjacencyListGraph.addVertice(3);

        expect(adjacencyListGraph.getNumerOfVertices()).toBe(3);
    });
});