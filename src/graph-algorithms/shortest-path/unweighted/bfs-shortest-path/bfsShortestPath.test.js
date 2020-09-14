const graphMockGenerators = require('../../../../data-structures/graphs/adjacency-list/graph-mock-generator/generateGraph.js');
const bfsShortestPath = require('./bfsShortestPath')

describe('bfsShortestPath', () => { 
   it('should find the shortest path', () => {
       const graph = graphMockGenerators.generateUnweightedGraph();

       expect(true).toBe(false);
   }); 
});
