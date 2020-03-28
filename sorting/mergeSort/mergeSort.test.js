const mergeSort = require("./mergeSort");
const testSortingUtil = require("../../mocks/testSortingUtil");
const arrayMocks = require("../../mocks/arrayMocks");

describe("mergeSort", () => {
    function generateSortingTest(arr, cmp) {
        it("should sort the array correctly", () => {
            expect(
                testSortingUtil(mergeSort, arr, cmp)
            ).toBe(true);
        });
    }

    Object.values(arrayMocks)
        .forEach(generateSortingTest);

    const desc = (a, b) => b - a;
    generateSortingTest(arrayMocks.unsortedArray, desc);
});