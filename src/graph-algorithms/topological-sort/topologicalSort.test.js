const topologicalSort = require('./topologicalSort');
const graphGenerator = require('../../data-structures/graphs/graph-mock-generator/graphGenerator.js');
const Edge = require('../../data-structures/graphs/edge/Edge.js');

describe('topologicalSort', () => { 
    it('should return topological sorting', () => {
        const asyclicGraph = graphGenerator.generateAsyclicGraph();
        asyclicGraph.removeVertex("k11");
        asyclicGraph.removeEdge(new Edge("k1", "k6", 13));

        expect(topologicalSort(asyclicGraph)).toEqual(['v1','v8','v12','v7','v9','v5','v4','v3','v2','v6','v10']);
    }); 
});
