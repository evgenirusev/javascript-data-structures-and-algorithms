const evaluateRPN = require("./evaluateRPN");

describe('evaluateRPN', () => {
    it("should evaluate correctly", () => {
        expect(evaluateRPN(["2", "1", "+", "3", "*"])).toEqual(9);
    });

    it("should evaluate correctly", () => {
        expect(evaluateRPN(["4", "13", "5", "/", "+"])).toEqual(6.6);
    });
});
