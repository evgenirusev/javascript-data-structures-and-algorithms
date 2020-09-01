const AdjacencyListGraph = require("./AdjacencyListGraph");
const Vertex = require("../vertex/Vertex.js");
const Edge = require("../edge/Edge.js");

describe("AdjacencyListGraph", () => {
    let graph;
    const edges = [ 
        new Edge("key1", "key2", 1),    
        new Edge("key1", "key3", 2),    
        new Edge("key2", "key3", 3),    
        new Edge("key2", "key4", 4),    
        new Edge("key4", "key2", 5) 
    ];
    const verticesToInsert = {
        testKey1: new Vertex("key1", "val1"),
        testKey2: new Vertex("key2", "val2"),
        testKey3: new Vertex("key3", "val3"),
        testKey4: new Vertex("key4", "val4")
    };

    beforeEach(() => {
        graph = new AdjacencyListGraph();
        Object.values(verticesToInsert).forEach(vertex => {
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
        expect(graph.incomingEdgesOf("key1")).toEqual([]);
        expect(graph.inDegreeOf("key2")).toEqual([edges[0], edges[4]]);
        expect(graph.inDegreeOf("key3")).toEqual([edges[1], edges[2]]);
    });

    it("should retrieve the correct outgoing edges", () => {
        expect(graph.inDegreeOf("key1")).toEqual([]);
        expect(graph.inDegreeOf("key2")).toEqual([edges[0], edges[4]]);
        expect(graph.inDegreeOf("key3")).toEqual([edges[1], edges[2]]);
    });

    it("should retrieve the correct vertice adjacentCounts", () => {
        expect(graph.adjacentCount("key1")).toBe(2);
        expect(graph.adjacentCount("key2")).toBe(3);
        expect(graph.adjacentCount("key4")).toBe(1);
    });

    it("should have the correct values", () => {
        expect(graph.getVertex("key1").value).toBe("testVal1");
        expect(graph.getVertex("key2").value).toBe("testVal2");
    });

    it("should get the edges", () => {
        expect(graph.getEdges("key1").length).toBe(2);
    });

    describe("removeAllEdgesInBetween", () => {
        it("should remove the edges by key", () => {
            // REFACTOR
            graph = new AdjacencyListGraph();
            const verticesToInsert = {
                testKey1: new Vertex("key1", "val1"),
                testKey2: new Vertex("key2", "val2")
            };

            Object.values(verticesToInsert).forEach(vertex => {
                graph.addVertex(vertex);
            });

            graph.addEdge(new Edge("key1", "key2"));
            graph.addEdge(new Edge("key1", "key2"));
        });

        it("should remove the edges by key", () => {
            graph.removeAllEdgesInBetween("key1", "key2");
            graph.removeAllEdgesInBetween("key4", "key2");

            expect(graph.getAdjacent("key1")).toEqual(["key3"]);
            expect(graph.getAdjacent("key2")).toEqual(["key3"]);
            expect(graph.getAdjacent("key4")).toEqual([]);
        });
    });
});
