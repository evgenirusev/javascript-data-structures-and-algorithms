const AdjacencyListGraph = require("./AdjacencyListGraph");
const Vertex = require("../../vertex/Vertex");
const Edge = require("../../edge/Edge");

describe("AdjacencyListGraph", () => {
    let graph;
    const edges = [
        new Edge("testKey1", "testKey2", 1),
        new Edge("testKey1", "testKey3", 2),
        new Edge("testKey2", "testKey3", 3),
        new Edge("testKey2", "testKey4", 4),
        new Edge("testKey4", "testKey2", 5)
    ];

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
        expect(graph.getAdjacent("testKey1")).toEqual(["testKey2", "testKey3"]);
        expect(graph.getAdjacent("testKey2")).toEqual(["testKey1", "testKey3", "testKey4"]);
        expect(graph.getAdjacent("testKey4")).toEqual(["testKey2"]);
    });

    it("should retrieve the correct vertice degrees", () => {
        expect(graph.degree("testKey1")).toBe(2);
        expect(graph.degree("testKey2")).toBe(3);
        expect(graph.degree("testKey4")).toBe(1);
    });

    it("should have the correct values", () => {
        expect(graph.getVertex("testKey1").value).toBe("testVal1");
        expect(graph.getVertex("testKey2").value).toBe("testVal2");
    });

    it("should get the edges", () => {
        expect(graph.getEdges("testKey1").length).toBe(2);
    });

    describe("removeAllEdgesInBetween", () => {
        it("should remove the edges by key", () => {
            graph = new AdjacencyListGraph();
            const verticesToInsert = {
                testKey1: new Vertex("testKey1", 'testVal1'),
                testKey2: new Vertex("testKey2", 'testVal2')
            };

            Object.values(verticesToInsert).forEach(vertex => {
                graph.addVertex(vertex);
            });

            graph.addEdge(new Edge("testKey1", "testKey2"));
            graph.addEdge(new Edge("testKey2", "testKey1"));
        });

        it("should remove the edges by key", () => {
            graph.removeAllEdgesInBetween("testKey1", "testKey2");
            graph.removeAllEdgesInBetween("testKey4", "testKey2");

            expect(graph.getAdjacent("testKey1")).toEqual(["testKey3"]);
            expect(graph.getAdjacent("testKey2")).toEqual(["testKey3"]);
            expect(graph.getAdjacent("testKey4")).toEqual([]);
        });
    });

    it("should get all the edges", () => {
        expect(graph.allEdges.length).toEqual(edges);
    });
});