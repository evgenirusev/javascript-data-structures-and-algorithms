const AdjacencyListGraph = require("./AdjacencyListGraph");
const Vertex = require("../vertex/Vertex.js");
const Edge = require("../edge/Edge.js");

describe("AdjacencyListGraph", () => {
    let graph;
    const edges = [ 
        new Edge("key0", "key1", 1),
        new Edge("key0", "key2", 2),
        new Edge("key1", "key2", 3),
        new Edge("key1", "key3", 4),
        new Edge("key3", "key1", 5) 
    ];
    const vertices = {
        testKey1: new Vertex("key0", "val0"),
        testkey1: new Vertex("key1", "val1"),
        testkey2: new Vertex("key2", "val2"),
        testkey3: new Vertex("key3", "val3")
    };

    beforeEach(() => {
        graph = new AdjacencyListGraph();
        Object.values(vertices).forEach(vertex => {
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

    it("should retrieve the correct incoming edges", () => {
        expect(graph.incomingEdgesOf(vertices[0])).toEqual([]);
        expect(graph.incomingEdgesOf(vertices[1])).toEqual([edges[0], edges[4]]);
        expect(graph.incomingEdgesOf(vertices[2])).toEqual([edges[1], edges[2]]);
        expect(graph.incomingEdgesOf(vertices[3])).toEqual([edges[1]]);
    });

    it("should retrieve the correct outgoing edges", () => {
        expect(graph.outgoingEdgesOf(vertices[0])).toEqual([edges[1], edges[2]]);
        expect(graph.outgoingEdgesOf(vertices[1])).toEqual([edges[2], edges[3]]);
        expect(graph.outgoingEdgesOf(vertices[2])).toEqual([]);
        expect(graph.outgoingEdgesOf(vertices[3])).toEqual([edges[1]]);
    });

    it("should retrieve the correct vertice adjacentCounts", () => {
        expect(graph.adjacentCount("key0")).toBe(2);
        expect(graph.adjacentCount("key1")).toBe(3);
        expect(graph.adjacentCount("key3")).toBe(1);
    });

    it("should have the correct values", () => {
        expect(graph.getVertex("key0").value).toBe("val0");
        expect(graph.getVertex("key1").value).toBe("val1");
    });

    it("should get the edges", () => {
        expect(graph.getEdges("key0").length).toBe(2);
    });

    describe("removeAllEdgesInBetween", () => {
        it("should remove the edges by key", () => {
            // REFACTOR
            graph = new AdjacencyListGraph();
            const vertices = {
                testKey1: new Vertex("key0", "val1"),
                testkey1: new Vertex("key1", "val2")
            };

            Object.values(vertices).forEach(vertex => {
                graph.addVertex(vertex);
            });

            graph.addEdge(new Edge("key0", "key1"));
            graph.addEdge(new Edge("key0", "key1"));
        });

        it("should remove the edges by key", () => {
            graph.removeAllEdgesInBetween("key0", "key1");
            graph.removeAllEdgesInBetween("key3", "key1");

            expect(graph.getAdjacent("key0")).toEqual(["key2"]);
            expect(graph.getAdjacent("key1")).toEqual(["key2"]);
            expect(graph.getAdjacent("key3")).toEqual([]);
        });
    });
});
