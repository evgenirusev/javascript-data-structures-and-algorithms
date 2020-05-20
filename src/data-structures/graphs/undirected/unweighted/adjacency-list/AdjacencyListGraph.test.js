const AdjacencyListGraph = require("./AdjacencyListGraph");
const Vertex = require("../../../vertex/Vertex")

describe("AdjacencyListGraph", () => {
    let graph;

    beforeEach(() => {
        graph = new AdjacencyListGraph();
        const verticesToInsert = {
            testKey1: new Vertex("testKey1", 'testVal1'),
            testKey2: new Vertex("testKey2", 'testVal2'),
            testKey3: new Vertex("testKey3", 'testVal3'),
            testKey4: new Vertex("testKey4", 'testVal4')
        };

        Object.values(verticesToInsert).forEach(vertex => {
            graph.addVertex(vertex);
        });

        graph.addEdge("testKey1", "testKey2");
        graph.addEdge("testKey1", "testKey3");
        graph.addEdge("testKey2", "testKey3");
        graph.addEdge("testKey2", "testKey4");
        graph.addEdge("testKey4", "testKey2");
    });

    it("should add edges and retrive the correct amout of vertices", () => {
        expect(graph.getNumerOfVertices()).toBe(4);
    });

    it("should add edges retrieve the correct edges", () => {
        expect(graph.getAdjacent("testKey1")).toEqual(["testKey2", "testKey3"]);
        expect(graph.getAdjacent("testKey2")).toEqual(["testKey1", "testKey3", "testKey4"]);
        expect(graph.getAdjacent("testKey4")).toEqual(["testKey2"]);
    });

    it("should retrieve the correct vertice adjacentCounts", () => {
        expect(graph.adjacentCount("testKey1")).toBe(2);
        expect(graph.adjacentCount("testKey2")).toBe(3);
        expect(graph.adjacentCount("testKey4")).toBe(1);
    });

    it("should have the correct values", () => {
        expect(graph.getVertex("testKey1").value).toBe("testVal1");
        expect(graph.getVertex("testKey2").value).toBe("testVal2");
    });

    it("should get the edges", () => {
        expect(graph.getEdges("testKey1").length).toBe(2);
    });

    it("should remove the edges by key", () => {
        graph.removeAllEdgesInBetween("testKey1", "testKey2");
        graph.removeAllEdgesInBetween("testKey4", "testKey2");

        expect(graph.getAdjacent("testKey1")).toEqual(["testKey3"]);
        expect(graph.getAdjacent("testKey2")).toEqual(["testKey3"]);
        expect(graph.getAdjacent("testKey4")).toEqual([]);
    });

    it("should count the vertices", () => {
        expect(graph.verticesCount).toBe(4);
    });

    it("should count the vertices", () => {
        graph.removeVertex("testKey2");

        expect(graph.getNumerOfVertices()).toBe(3);
        expect(graph.getAdjacent("testKey1")).toEqual(["testKey3"]);
        expect(graph.getAdjacent("testKey4")).toEqual([]);
    });
});