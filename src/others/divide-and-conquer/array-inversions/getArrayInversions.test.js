const getArrayInversions = require("./getArrayInversions");

describe("getArrayInversions", () => {
    it("should return correct number of inversions", () => {
        expect(getArrayInversions([1, 2, 3, 4])).toBe(0);
    });

    it("should return correct number of inversions", () => {
        expect(getArrayInversions([5, 1, 2, 4])).toBe(3);
    });

    it("should return correct number of inversions", () => {
        expect(getArrayInversions([7, 3, 9, 0])).toBe(4);
    });

    it("should return correct number of inversions", () => {
        expect(getArrayInversions([5, 1, 2, 4, 7, 3, 9, 0])).toBe(13);
    });
});