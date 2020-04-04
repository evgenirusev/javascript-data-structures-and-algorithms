const heapSort = require("./heapSort");
const isSortingAlgorithmValid = require("../../mocks/isSortingAlgorithmValid");
const arrayFactoryUtils = require("../../mocks/arrayFactoryUtils");

describe("heapSort", () => {
    function generateSortingTest(arr, cmp) {
        it("should heapSort the array correctly", () => {
            expect(
                isSortingAlgorithmValid(heapSort, arr, cmp)
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