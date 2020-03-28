const heapSort = require("./bubbleSort");
const isSortingAlgorithmValid = require("../../mocks/isSortingAlgorithmValid");
const arrayFactoryUtils = require("../../mocks/arrayFactoryUtils");

describe("bubbleSort", () => {
    function generateSortingTest(arr, cmp) {
        it("should bubbleSort the array correctly", () => {
            expect(
                isSortingAlgorithmValid(heapSort, arr, cmp)
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