const getShortestPaths = require('./dijkstra')
const graphMockGenerators = require('../../../data-structures/graphs/graph-mock-generator/graphGenerator.js');

describe('getShortestPaths', () => {
    it('should return a list of shortest paths', () => {
        const graph = graphMockGenerators.generateWeightedGraph();

        expect(getShortestPaths(graph, graph.getVertex("k1")))
            .toEqual({'k1': 0, 'k2': 6, 'k3': 3, 'k6': 10, 'k5': 5, 'k4': 7, 'k7': 11, 'k8': 9, 'k9': 9, 'k12': 8});
    });
});
