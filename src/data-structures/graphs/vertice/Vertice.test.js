const Vertice = require("./Vertice");

describe("Vertice", () => {
    it("should get the label", () => {
        const value = { test: "test" };
        const vertice = new Vertice("1", { test: "test" });
        
        expect(vertice.label).toBe("1");
        expect(vertice.value).toEqual(value);
    });
});