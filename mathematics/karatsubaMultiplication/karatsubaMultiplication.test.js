const multiply = require("./karatsubaMultiplication");

describe("karatsubaMultiplication", () => {
    it("should multiply the numbers correctly", () => {
        expect(multiply(2, 3)).toBe(2 * 3);
        expect(multiply(12, 3)).toBe(12 * 3);
        expect(multiply(3, 12)).toBe(3 * 12);
        expect(multiply(12, 34)).toBe(12 * 34);
        expect(multiply(34, 12)).toBe(34 * 12);
        expect(multiply(4, 345)).toBe(4 * 345);
        expect(multiply(23, 456)).toBe(23 * 456);
        expect(multiply(456, 23)).toBe(456 * 23);
        expect(multiply(123, 456)).toBe(123 * 456);
    });
});