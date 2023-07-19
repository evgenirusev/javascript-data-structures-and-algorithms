const minCostConnectPoints = require('./minCostToConnectPoints');

describe("minCostToConnectPoints", () => {
    it("should return valid total", () => {
        expect(minCostConnectPoints([[0,0],[2,2],[3,10],[5,2],[7,0]])).toBe(20);
    });
});