const mergeSort = require("./mergeSort");

describe("mergeSort", () => {
    it("should sort in ascending order", () => {
        const arr = [8, 2, 5, 3, 9, 1];
        const sorted = [1, 2, 3, 5, 8, 9];
        
        mergeSort(arr);
        expect(arr).toEqual(sorted);
    });
});