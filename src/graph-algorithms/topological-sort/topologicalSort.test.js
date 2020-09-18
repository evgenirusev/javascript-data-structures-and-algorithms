const topologicalSort = require('./topologicalSort');
const graphGenerator = require('../../data-structures/graphs/graph-mock-generator/graphGenerator.js');

describe('topologicalSort', () => { 
   it('should return topological sorting', () => {
       const asyclicGraph = graphGenerator.generateAsyclicGraph();

       expect(topologicalSort(asyclicGraph)).toEqual([]);
   }); 
});
