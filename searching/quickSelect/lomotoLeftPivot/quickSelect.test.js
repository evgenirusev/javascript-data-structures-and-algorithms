const quickSelect = require("./quickSelect");

describe("quickSelect", () => {
    it("should find the element", () => {
        expect(quickSelect([4, 2, 9, 6], 3)).toBe(6);
        expect(quickSelect([1, 5, 4, 7, 9, 13, 15], 6)).toBe(13);
    });

    it("should find the smallest element", () => {
        expect(quickSelect([3, 1, 2], 1)).toBe(1);
    });

    it("should find the largest element", () => {
        expect(quickSelect([3, 1, 2], 3)).toBe(3);
    });
});