const kruskalFindMinimumWeightTree = require('./kruskal');
const graphGenerator = require('../../../data-structures/graphs/graph-mock-generator/graphGenerator.js');

describe('kruskalFindMinimumWeightTree', () => { 
    it('should return the minimum weight tree', () => {
        const graph = graphGenerator.generateWeightedGraph();
        expect(kruskalFindMinimumWeightTree(graph.allEdges, graph.allVertices.map(vertex => vertex.key)))
            .toEqual(['k4','k12','k7','k12','k9','k1','k3','k5','k8','k3']);
    }); 
});
