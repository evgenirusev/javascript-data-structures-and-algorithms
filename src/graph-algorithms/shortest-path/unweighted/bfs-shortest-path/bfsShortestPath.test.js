const graphMockGenerators = require('../../../../data-structures/graphs/adjacency-list/graph-mock-generator/generateGraph.js');
const bfsShortestPath = require('./bfsShortestPath')

describe('bfsShortestPath', () => { 
   it('should find the shortest path', () => {
       const graph = graphMockGenerators.generateUnweightedGraph();

       expect(graph, graph.getVertex("k1"), graph.getVertex("k5")).toBe(2);
   }); 
});
