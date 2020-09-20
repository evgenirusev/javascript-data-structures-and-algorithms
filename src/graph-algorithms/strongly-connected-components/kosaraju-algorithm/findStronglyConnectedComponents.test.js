const findStronglyConnectedComponents = require('./findStronglyConnectedComponents');
const graphGenerator = require('../../../data-structures/graphs/graph-mock-generator/graphGenerator.js');
const Edge = require('../../../data-structures/graphs/edge/Edge.js');

describe('kosarajuAlgorithm', () => { 
    it('should find the strongly connected components', () => {
        const graph = graphGenerator.generateUnweightedGraph();
        graph.removeEdge(new Edge("k1", "k6", 13));

        expect(findStronglyConnectedComponents(graph)).toEqual([
            [1],
            [10],
            [2, 3],
            [4,5,8,9,6],
            [12],
            [11]
        ]);
    }); 
});
