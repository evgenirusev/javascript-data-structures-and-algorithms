const getShortestPaths = require('./dijkstra')
const graphMockGenerators = require('../../../data-structures/graphs/graph-mock-generator/graphGenerator.js');
const Graph = require("../../../data-structures/graphs/adjacency-list/AdjacencyListGraph")
const Vertex = require("../../../data-structures/graphs/vertex/Vertex.js");
const fs = require("fs");
const Edge = require('../../../data-structures/graphs/edge/Edge');

describe('getShortestPaths', () => {
    // PROBLEM DEFINITION:
    // The file contains an adjacency list representation of an undirected weighted graph with 200 vertices labeled 1 to 200.  Each row consists of the node tuples that are adjacent to that particular vertex along with the length of that edge. For example, the 6th row has 6 as the first entry indicating that this row corresponds to the vertex labeled 6. The next entry of this row "141,8200" indicates that there is an edge between vertex 6 and vertex 141 that has length 8200.  The rest of the pairs of this row indicate the other vertices adjacent to vertex 6 and the lengths of the corresponding edges.
    // Your task is to run Dijkstra's shortest-path algorithm on this graph, using 1 (the first vertex) as the source vertex, and to compute the shortest-path distances between 1 and every other vertex of the graph. If there is no path between a vertex v and vertex 1, we'll define the shortest-path distance between 1 and v to be 1000000. 
    // You should report the shortest-path distances to the following ten vertices, in order: 7,37,59,82,99,115,133,165,188,197. You should encode the distances as a comma-separated string of integers. So if you find that all ten of these vertices except 115 are at distance 1000 away from vertex 1 and 115 is 2000 distance away, then your answer should be 1000,1000,1000,1000,1000,2000,1000,1000,1000,1000. Remember the order of reporting DOES MATTER, and the string should be in the same order in which the above ten vertices are given. The string should not contain any spaces.  Please type your answer in the space provided.
    // O(mn) time implementation of Dijkstra's algorithm should work fine.  OPTIONAL: For those of you seeking an additional challenge, try implementing the heap-based version.  Note this requires a heap that supports deletions, and you'll probably need to maintain some kind of mapping between vertices and their positions in the heap.
    it("should report the shortest-path distances to the following ten vertices, in order: 7,37,59,82,99,115,133,165,188,197", () => {
        const isNotEmptyString = (str) => str !== "";
        let graphEntries = fs.readFileSync(__dirname + "/graph-data-set.txt")
            .toString()
            .split("\n")
            .map(graphEntryString => graphEntryString
                .split(/\s/)
                .filter(isNotEmptyString)
            );

        const graph = new Graph();

        graphEntries.forEach(graphEntry => {
            if (graphEntry[0] !== undefined) {
                const vertexKey = graphEntry.shift();

                graph.addVertex(
                    new Vertex(vertexKey)
                );

                graphEntry.forEach(edge => {
                    const destinationAndWeight = edge.split(",");
                    const destination = destinationAndWeight[0];
                    const weight = new Number(destinationAndWeight[1]);
                    graph.addEdge(new Edge(vertexKey, destination, weight))
                });
            }
        });

        const shortestPaths = getShortestPaths(graph, graph.getVertex("1"));
        expect(shortestPaths["7"]).toEqual(2599);
        expect(shortestPaths["37"]).toEqual(2610);
        expect(shortestPaths["59"]).toEqual(2947);
        expect(shortestPaths["82"]).toEqual(2052);
        expect(shortestPaths["99"]).toEqual(2367);
        expect(shortestPaths["115"]).toEqual(2399);
        expect(shortestPaths["133"]).toEqual(2029);
        expect(shortestPaths["165"]).toEqual(2442);
        expect(shortestPaths["188"]).toEqual(2505);
        expect(shortestPaths["197"]).toEqual(3068);
    });

    it('should return a list of shortest paths', () => {
        const graph = graphMockGenerators.generateWeightedGraph();

        expect(getShortestPaths(graph, graph.getVertex("k1")))
            .toEqual({'k1': 0, 'k2': 6, 'k3': 3, 'k6': 10, 'k5': 5, 'k4': 7, 'k7': 11, 'k8': 9, 'k9': 9, 'k12': 8});
    });
});
