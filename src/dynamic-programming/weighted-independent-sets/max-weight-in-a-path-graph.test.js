const maxWeightInAPathGraph = require("./max-weight-in-a-path-graph");

describe("maxWeightInAPathGraph", () => {
  it("should return the max weight for the path graph", () => {
    const pathGraph = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10]];
    const weights = [2, 5, 1, 10, 4, 7, 3, 6, 8, 4];

    // Graph  -  1---2---3---4---5---6---7---8---9---10
    // Weights - 2---5---1---10---4---7---3---6---8---4
    expect(maxWeightInAPathGraph(pathGraph, weights)).ToBe(35);
  });
});