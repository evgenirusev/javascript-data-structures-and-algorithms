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

    it("edges and vertices should have been added successfully", () => {
        graph.
    });

    it("should retrieve the correct incoming edges", () => {
        expect(graph.incomingEdgesOf(vertices[0])).toEqual([]);
        expect(graph.incomingEdgesOf(vertices[1])).toEqual([edges[0], edges[4]]);
        expect(graph.incomingEdgesOf(vertices[2])).toEqual([edges[1], edges[2]]);
        expect(graph.incomingEdgesOf(vertices[3])).toEqual([edges[1]]);
    });

    it("should retrieve the correct incoming edges", () => {
        expect(graph.incomingEdgesOf(vertices[0])).toEqual([]);
        expect(graph.incomingEdgesOf(vertices[1])).toEqual([edges[0], edges[4]]);
        expect(graph.incomingEdgesOf(vertices[2])).toEqual([edges[1], edges[2]]);
        expect(graph.incomingEdgesOf(vertices[3])).toEqual([edges[1]]);
    });

    it("should add vertices", () => {
    });
});