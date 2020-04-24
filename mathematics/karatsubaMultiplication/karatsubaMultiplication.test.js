const karatsubaMultiplication = require("./karatsubaMultiplication");

describe("karatsubaMultiplication", () => {
    it("should multiply the numbers correctly", () => {
        expect(karatsubaMultiplication(2, 3)).toBe(6);
    });
});