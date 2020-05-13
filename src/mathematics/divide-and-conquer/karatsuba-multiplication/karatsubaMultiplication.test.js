const multiply = require("./karatsubaMultiplication");

describe("karatsubaMultiplication", () => {
    it("should multiply single digit numbers correctly", () => {
        expect(multiply(2, 3)).toBe(2 * 3);
        expect(multiply(5, 5)).toBe(5 * 5);
        expect(multiply(9, 1)).toBe(9 * 1);
    });

    it("should multiply single digit with multy digit numbers correctly", () => {
        expect(multiply(12, 3)).toBe(12 * 3);
        expect(multiply(3, 12)).toBe(3 * 12);
        expect(multiply(4, 345)).toBe(4 * 345);
    });

    it("should multiply single digit with multy digit numbers correctly", () => {
        expect(multiply(12, 3)).toBe(12 * 3);
        expect(multiply(3, 12)).toBe(3 * 12);
    });

    it("should multiply multy digit numbers correctly", () => {
        expect(multiply(12, 34)).toBe(12 * 34);
        expect(multiply(34, 12)).toBe(34 * 12);
        expect(multiply(23, 456)).toBe(23 * 456);
        expect(multiply(456, 23)).toBe(456 * 23);
        expect(multiply(123, 456)).toBe(123 * 456);
        expect(multiply(1234, 5678)).toBe(1234 * 5678);
    });
});