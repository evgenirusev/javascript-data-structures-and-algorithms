const heapSort = require("./heapSort");

describe("heapSort", () => {
    it("should sort the array in ascending order", () => {
        const arr = [2, 8, 5, 3, 9, 1];
        const sorted = [1, 2, 3, 5, 8, 9];
        
        heapSort(arr);
        expect(arr).toEqual(sorted);
    });

    it("should sort the array in descending order", () => {
        const arr = [2, 8, 5, 3, 9, 1];
        const sorted = [9, 8, 5, 3, 2, 1];
        
        heapSort(arr);
        expect(arr).toEqual(sorted);
    });
});