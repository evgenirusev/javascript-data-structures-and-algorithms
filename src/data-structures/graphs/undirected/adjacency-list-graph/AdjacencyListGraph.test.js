const AdjacencyListGraph = require("./AdjacencyListGraph");

describe("AdjacencyListGraph", () => {
    let graph;

    beforeEach(() => {
        graph = new AdjacencyListGraph();
        const verticesToInsert = [0, 1, 2, 3]
        verticesToInsert.forEach(vertice => {
            graph.addVertice(vertice);
        });

        graph.addEdge(0, 1);
        graph.addEdge(0, 2);
        graph.addEdge(1, 2);
        graph.addEdge(1, 3);
        graph.addEdge(3, 1);
    });

    it("should add edges and retrive the correct amout of vertices", () => {
        expect(graph.getNumerOfVertices()).toBe(4);
    });

    it("should add edges retrieve the correct edges", () => {
        expect(graph.getAdjacent(0)).toEqual([1, 2]);
        expect(graph.getAdjacent(1)).toEqual([0, 2, 3]);
        expect(graph.getAdjacent(3)).toEqual([1]);
    });

    it("should retrieve the correct vertice degrees", () => {
        expect(graph.degree(0)).toBe(2);
        expect(graph.degree(1)).toBe(3);
        expect(graph.degree(3)).toBe(1);
    });
});