const heapSort = require("./heapSort");

describe("heapSort", () => {
    it("should sort the array", () => {
        const arr = [2, 8, 5, 3, 9, 1];
        const sorted = [1, 2, 3, 5, 8, 9];
        
        heapSort(arr);
        expect(arr).toEqual(sorted);
    });
});