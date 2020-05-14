const Edge = require("./Edge");

describe("Edge", () => {
    it("should get the correct values", () => {
        const edge = new Edge(1, 2, 3);
        
        expect(edge.startVertexKey).toBe(1);
        expect(edge.endVertexKey).toBe(2);
        expect(edge.weight).toBe(3);
    });
});