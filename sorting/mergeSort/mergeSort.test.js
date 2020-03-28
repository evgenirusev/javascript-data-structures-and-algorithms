const mergeSort = require("./mergeSort");
const testSortingUtil = require("../../mocks/testSortingUtil");
const arrayMocks = require("../../mocks/arrayMocks");

describe("mergeSort", () => {
    it("should sort in ascending order", () => {
        expect(
            testSortingUtil(mergeSort, arrayMocks.notSortedArray)
        ).toBe(true);
    });

    it("should sort in ascending order", () => {
        expect(
            testSortingUtil(mergeSort, arrayMocks.reverseArray)
        ).toBe(true);
    });

    it("should sort in ascending order", () => {
        expect(
            testSortingUtil(mergeSort, arrayMocks.notSortedArray)
        ).toBe(true);
    });

    it("should sort in ascending order", () => {
        expect(
            testSortingUtil(mergeSort, arrayMocks.equalArray)
        ).toBe(true);
    });

    it("should sort in ascending order", () => {
        expect(
            testSortingUtil(mergeSort, arrayMocks.negativeArray)
        ).toBe(true);
    });

    it("should sort in ascending order", () => {
        expect(
            testSortingUtil(mergeSort, arrayMocks.negativeArraySorted)
        ).toBe(true);
    });

    it("should sort in descending order", () => {
        const desc = (a, b) => b - a;

        expect(
            testSortingUtil(mergeSort, arrayMocks.notSortedArray, desc)
        ).toBe(true);
    });
});