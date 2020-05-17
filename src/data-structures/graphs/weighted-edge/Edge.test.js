const Edge = require("./Edge");

describe("Edge", () => {
    it("should get the correct values", () => {
        const edge = new Edge(1, 2, 3);
        
        expect(edge.start).toBe(1);
        expect(edge.end).toBe(2);
        expect(edge.weight).toBe(3);
    });
});