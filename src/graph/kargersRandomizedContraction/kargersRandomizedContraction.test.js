const Graph = require("../../data-structures/graphs/undirected/unweighted/adjacency-list/AdjacencyListGraph");
const Vertex = require("../../data-structures/graphs/vertex/Vertex");
const kargersRandomizedContraction = require("./kargersRandomizedContraction");
const fs = require("fs");

describe("kargersRandomizedContraction", () => {
    it("remaining vertices should be 2 & should compute number of connecting edges between the two remaining vertices.", () => {
        const isNotEmptyString = (str) => str !== "";
        var graphEntries = fs.readFileSync(__dirname + "/GraphMock.txt")
            .toString()
            .split("\n")
            .map(graphEntryString => graphEntryString
                .split(/\s/)
                .filter(isNotEmptyString)
            );

        const graph = new Graph();

        graphEntries.forEach(graphEntry => {
            if (graphEntry[0] !== undefined) {
                graph.addVertex(
                    new Vertex(graphEntry[0])
                );
            }
        });

        graphEntries.forEach(graphEntry => {
            const vertex = graphEntry[0];

            graphEntry.slice(1)
                .forEach(adjVertexKey => {
                    graph.addEdge(vertex, adjVertexKey);
                });
        });

        expect(typeof kargersRandomizedContraction(graph)).toBe("number");
        expect(graph.verticesCount).toBe(2);
    });
});