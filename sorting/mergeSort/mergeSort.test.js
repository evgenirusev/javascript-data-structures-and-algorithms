const mergeSort = require("./mergeSort");
const isSortingAlgorithmValid = require("../../mocks/isSortingAlgorithmValid");
const arrayFactoryUtils = require("../../mocks/arrayFactoryUtils");

describe("mergeSort", () => {
    function generateSortingTest(arr, cmp) {
        it("should mergeSort the array correctly", () => {
            expect(
                isSortingAlgorithmValid(mergeSort, arr, cmp)
            ).toBe(true);
        });
    }

    Object.values(arrayFactoryUtils)
        .forEach((generateArray) => {
            const array = generateArray();
            generateSortingTest();
        });

    const desc = (a, b) => b - a;
    generateSortingTest(arrayFactoryUtils.getUnsortedArray(), desc);
});