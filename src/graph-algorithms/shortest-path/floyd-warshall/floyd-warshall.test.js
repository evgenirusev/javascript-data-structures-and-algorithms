const floydWarshall = require('./floyd-warshall')
const Graph = require("../../../data-structures/graphs/adjacency-list/AdjacencyListGraph")
const Vertex = require("../../../data-structures/graphs/vertex/Vertex.js");
const Edge = require('../../../data-structures/graphs/edge/Edge');

describe('floydWarshall', () => {
  it('should correctly calculate the shortest paths between all pairs of vertices in the graph', () => {
    const graph = new Graph();
    ['A','B','C','D','E'].forEach(vertexKey => {
        graph.addVertex(vertexKey)
    });

    [new Edge('A', 'B', 5),
    new Edge('A', 'C', 10),
    new Edge('B', 'C', 2),
    new Edge('B', 'D', 4),
    new Edge('C', 'D', 7),
    new Edge('D', 'E', 3)]
    .forEach(edge => {
        graph.addEdge(edge); 
    });
    
    const result = floydWarshall(graph);

    expect(result).toEqual([
        [Infinity, 5,        7,        9,        12      ], // A
        [Infinity, Infinity, 2,        4,        7       ], // B
        [Infinity, Infinity, Infinity, 7,        10      ], // C
        [Infinity, Infinity, Infinity, Infinity, 3       ], // D
        [Infinity, Infinity, Infinity, Infinity, Infinity], // E
    ]);
  });
})