const heapSort = require("./heapSort");

describe("heapSort", () => {
    it("should sort the array", () => {
        const unsorted = [2, 8, 5, 3, 9, 1];
        const sorted = [2, 8, 5, 3, 9, 1];

        expect(heapSort(unsorted)).toEqual(sorted);
    });
});