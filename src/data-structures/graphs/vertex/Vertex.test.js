const Vertex = require("./Vertex");

describe("Vertex", () => {
    it("should get the key and value", () => {
        const value = { test: "test" };
        const key = "1";
        const vertex = new Vertex(key, { test: "test" });

        expect(vertex).toBe(key);
        expect(vertex.key).toBe(key);
        expect(vertex.value).toEqual(value);
        expect(vertex.toString()).toEqual(key);
    });
});
