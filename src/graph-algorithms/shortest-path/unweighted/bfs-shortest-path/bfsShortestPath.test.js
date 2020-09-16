const graphMockGenerators = require('../../../../data-structures/graphs/adjacency-list/graph-mock-generator/generateGraph.js');
const bfsShortestPath = require('./bfsShortestPath')

describe('bfsShortestPath', () => { 
   it('should find the shortest path', () => {
       const graph = graphMockGenerators.generateUnweightedGraph();

       expect(bfsShortestPath(graph, graph.getVertex("k1"), graph.getVertex("k5"))).toBe(2);
       expect(bfsShortestPath(graph, graph.getVertex("k1"), graph.getVertex("k9"))).toBe(2);
       expect(bfsShortestPath(graph, graph.getVertex("k1"), graph.getVertex("k7"))).toBe(2);
       expect(bfsShortestPath(graph, graph.getVertex("k1"), graph.getVertex("k8"))).toBe(3);
   }); 
});
