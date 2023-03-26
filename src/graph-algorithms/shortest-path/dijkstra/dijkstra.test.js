const getShortestPaths = require('./dijkstra')
const graphMockGenerators = require('../../../data-structures/graphs/graph-mock-generator/graphGenerator.js');

describe('getShortestPaths', () => {
    it('should return a list of shortest paths', () => {
        const graph = graphMockGenerators.generateWeightedGraph();

        expect(getShortestPaths(graph, graph.getVertex("k1")))
            .toEqual({'k2': 8, 'k3': 3, 'k6': 10, 'k5': 5, 'k4': 9, 'k8': 11, 'k9': 12, 'k7': 14});
    });
});
