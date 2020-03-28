const mergeSort = require("./mergeSort");
const testSortingUtil = require("../../mocks/testSortingUtil");
const arrayFactoryUtils = require("../../mocks/arrayFactoryUtils");

describe("mergeSort", () => {
    function generateSortingTest(arr, cmp) {
        it("should mergeSort the array correctly", () => {
            expect(
                testSortingUtil(mergeSort, arr, cmp)
            ).toBe(true);
        });
    }

    Object.values(arrayFactoryUtils)
        .forEach((arrayFactoryCallback) => {
            generateSortingTest(arrayFactoryCallback());
        });

    const desc = (a, b) => b - a;
    generateSortingTest(arrayFactoryUtils.getUnsortedArray(), desc);
});