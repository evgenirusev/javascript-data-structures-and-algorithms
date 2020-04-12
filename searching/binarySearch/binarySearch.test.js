const binarySearch = require("./binarySearch");

describe("binarySearch", () => {
    it("should find the correct element", () => {
        const arr = [1, 2];
        expect(binarySearch(arr, 1)).toEqual(true);
    });
});