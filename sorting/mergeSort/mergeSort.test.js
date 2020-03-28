const mergeSort = require("./mergeSort");
const testSortingUtil = require("../../mocks/testSortingUtil");
const arrayMocks = require("../../mocks/arrayMocks");

describe("mergeSort", () => {
    it("should sort in ascending order", () => {
        expect(
            testSortingUtil(mergeSort, arrayMocks.notSortedArray)
        ).toBe(true);
    });

    it("should sort in descending order", () => {
        const arr = [2, 8, 5, 3, 9, 1];
        const sorted = [9, 8, 5, 3, 2, 1];
        const cmp = (a, b) => b - a;

        mergeSort(arr, cmp);
        expect(arr).toEqual(sorted);
    });
});