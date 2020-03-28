const mergeSort = require("./mergeSort");
const testSortingUtil = require("../../mocks/testSortingUtil");
const {
    getUnsortedArray,
    getSortedArray,
    getReverseArray,
    getEqualArray,
    getNegativeArray,
    getNegativeSortedArray,
    getOneElementArray,
    getTwoElementArray
} = require("../../mocks/arrayMockFactory");

describe("mergeSort", () => {
    function generateSortingTest(arr, cmp) {
        it("should mergeSort the array correctly", () => {
            expect(
                testSortingUtil(mergeSort, arr, cmp)
            ).toBe(true);
        });
    }

    generateSortingTest(getUnsortedArray());
    generateSortingTest(getSortedArray());
    generateSortingTest(getReverseArray());
    generateSortingTest(getEqualArray());
    generateSortingTest(getNegativeArray());
    generateSortingTest(getNegativeSortedArray());
    generateSortingTest(getOneElementArray());
    generateSortingTest(getTwoElementArray());

    const desc = (a, b) => b - a;
    generateSortingTest(getUnsortedArray(), desc);
});