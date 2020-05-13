const insertionSort = require("./insertionSort");
const isSortingAlgorithmValid = require("../../mocks/isSortingAlgorithmValid");
const arrayFactoryUtils = require("../../mocks/arrayFactoryUtils");

describe("insertionSort", () => {
    function generateSortingTest(arr, cmp) {
        it("should insertionSort the array correctly", () => {
            expect(
                isSortingAlgorithmValid(insertionSort, arr, cmp)
            ).toBe(true);
        });
    }

    Object.values(arrayFactoryUtils)
        .forEach((generateArray) => {
            generateSortingTest(generateArray());
        });

    const desc = (a, b) => b - a;
    generateSortingTest(arrayFactoryUtils.getUnsortedArray(), desc);
});