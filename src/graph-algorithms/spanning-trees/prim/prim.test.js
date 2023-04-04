const primFindMinimumWeightTree = require('./primFindMinimumWeightTree');
const graphGenerator = require('../../../data-structures/graphs/graph-mock-generator');
const Edge = require('../../../data-structures/graphs/edge/Edge.js');

describe('primFindMinimumWeightTree', () => { 
    it('should return the minimum weight tree', () => {
        const graph = graphGenerator.generateWeightedGraph();

        expect(primFindMinimumWeightTree(graph))
            .toEqual(["v1", "v3", "v5", "v9", "v7", "v8", "v2", "v4", "v12", "v6", "v10", "v11"]);
    }); 
});
