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
    const vertices = [
        new Vertex("key0", "val0"),
        new Vertex("key1", "val1"),
        new Vertex("key2", "val2"),
        new Vertex("key3", "val3")
    ];

    beforeEach(() => {
        graph = new AdjacencyListGraph();
        vertices.forEach(vertex => {
            graph.addVertex(vertex);
        });

        graph.addEdge(edges[0]);
        graph.addEdge(edges[1]);
        graph.addEdge(edges[2]);
        graph.addEdge(edges[3]);
        graph.addEdge(edges[4]);
    });

    it("vertices should have been added successfully", () => {
        expect(graph.allVertices).toEqual(vertices);
    });

    it("edges should have been added successfully", () => {
        expect(graph.allEdges).toEqual(edges);
    });

    it("should retrieve the correct incoming edges", () => {
        expect(graph.incomingEdgesOf(vertices[0])).toEqual([]);
        expect(graph.incomingEdgesOf(vertices[1])).toEqual([edges[0], edges[4]]);
        expect(graph.incomingEdgesOf(vertices[2])).toEqual([edges[1], edges[2]]);
        expect(graph.incomingEdgesOf(vertices[3])).toEqual([edges[3]]);
    });

    it("should retrieve the correct outgoing edges", () => {
        expect(graph.outgoingEdgesOf(vertices[0])).toEqual([edges[0], edges[1]]);
        expect(graph.outgoingEdgesOf(vertices[1])).toEqual([edges[2], edges[3]]);
        expect(graph.outgoingEdgesOf(vertices[2])).toEqual([]);
        expect(graph.outgoingEdgesOf(vertices[3])).toEqual([edges[4]]);
    });

    it("should remove edge", () => {
        graph.removeEdge(edges[0]);
        expect(graph.incomingEdgesOf(vertices[1])).toEqual([edges[4]]);
    });

    describe("undirected graph", () => {
        it("should be undirected", () => {
            graph = new AdjacencyListGraph(true);
            graph.addVertex(new Vertex("key0", "val0"));
            graph.addVertex(new Vertex("key1", "val1"));
            graph.addEdge(new Edge("key0", "key1"));

            expect(graph.allEdges).toEqual([
                new Edge("key0", "key1"),
                new Edge("key1", "key0")
            ]);
        });

        it("should remove edges from both sides", () => {
            graph = new AdjacencyListGraph(true);
            graph.addVertex(new Vertex("key0", "val0"));
            graph.addVertex(new Vertex("key1", "val1"));
            graph.addEdge(new Edge("key0", "key1"));

            expect(graph.allEdges).toEqual([]);
        });
    });
});
