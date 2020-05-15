const AdjacencyListGraph = require("./AdjacencyListGraph");
const Vertex = require("../../vertex/Vertex");
const Edge = require("../../edge/Edge");

describe("AdjacencyListGraph", () => {
    let graph;

    beforeEach(() => {
        graph = new AdjacencyListGraph();

        const verticesToInsert = {
            testKey1: new Vertex("testKey1", 'test 1'),
            testKey2: new Vertex("testKey2", 'test 2'),
            testKey3: new Vertex("testKey3", 'test 3'),
            testKey4: new Vertex("testKey4", 'test 4')
        };

        Object.values(verticesToInsert).forEach(vertex => {
            graph.addVertice(vertex);
        });

        graph.addEdge(new Edge("testKey1", "testKey2", 1));
        graph.addEdge(new Edge("testKey1", "testKey3", 2));
        graph.addEdge(new Edge("testKey2", "testKey3", 3));
        graph.addEdge(new Edge("testKey2", "testKey4", 4));
        graph.addEdge(new Edge("testKey4", "testKey2", 5));
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
});