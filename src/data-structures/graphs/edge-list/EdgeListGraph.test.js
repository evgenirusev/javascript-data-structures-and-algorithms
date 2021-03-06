const EdgeListGraph = require("./EdgeListGraph");
const Vertex = require("../vertex/Vertex.js");
const Edge = require("../edge/Edge.js");

describe("Graph", () => {
    let graph;
    const mockVertices = {
        testKey1: new Vertex("testKey1", 'testVal1'),
        testKey2: new Vertex("testKey2", 'testVal2'),
        testKey3: new Vertex("testKey3", 'testVal3'),
        testKey4: new Vertex("testKey4", 'testVal4')
    };
    const edges = [
        new Edge(mockVertices.testKey1, mockVertices.testKey2, 1),
        new Edge(mockVertices.testKey1, mockVertices.testKey3, 2),
        new Edge(mockVertices.testKey2, mockVertices.testKey3, 3),
        new Edge(mockVertices.testKey2, mockVertices.testKey4, 4),
        new Edge(mockVertices.testKey4, mockVertices.testKey2, 5)
    ];

    beforeEach(() => {
        graph = new EdgeListGraph();

        Object.values(mockVertices).forEach(vertex => {
            graph.addVertex(vertex);
        });

        graph.addEdge(edges[0]);
        graph.addEdge(edges[1]);
        graph.addEdge(edges[2]);
        graph.addEdge(edges[3]);
        graph.addEdge(edges[4]);
    });

    it("should add edges and retrive the correct amout of vertices", () => {
        expect(graph.getNumerOfVertices()).toBe(4);
    });

    it("should add edges retrieve the correct edges", () => {
        expect(graph.getAdjacent("testKey1")).toEqual([mockVertices.testKey2, mockVertices.testKey3]);
        expect(graph.getAdjacent("testKey2")).toEqual([mockVertices.testKey1, mockVertices.testKey3, mockVertices.testKey4]);
        expect(graph.getAdjacent("testKey4")).toEqual([mockVertices.testKey2]);
    });

    it("should retrieve the correct vertice adjacentCounts", () => {
        expect(graph.adjacentCount("testKey1")).toBe(2);
        expect(graph.adjacentCount("testKey2")).toBe(4);
        expect(graph.adjacentCount("testKey4")).toBe(2);
    });

    it("should have the correct values", () => {
        expect(graph.getVertex("testKey1").value).toBe("testVal1");
        expect(graph.getVertex("testKey2").value).toBe("testVal2");
    });

    it("should get the edges", () => {
        expect(graph.getEdges("testKey1").length).toBe(2);
        expect(graph.getEdges("testKey2").length).toBe(4);
        expect(graph.getEdges("testKey4").length).toBe(2);
    });

    it("should remove the edges by key", () => {
        graph.removeAllEdgesInBetween("testKey1", "testKey2");
        graph.removeAllEdgesInBetween("testKey4", "testKey2");

        expect(graph.getAdjacent("testKey1")).toEqual([mockVertices.testKey3]);
        expect(graph.getAdjacent("testKey2")).toEqual([mockVertices.testKey3]);
        expect(graph.getAdjacent("testKey4")).toEqual([]);
    });

    it("should return all edges", () => {
        expect(graph.allEdges).toEqual(edges);
    });
});
