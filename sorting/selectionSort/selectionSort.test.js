const selectionSort = require("./selectionSort");
const isSortingAlgorithmValid = require("../../../mocks/isSortingAlgorithmValid");
const arrayFactoryUtils = require("../../../mocks/arrayFactoryUtils");

describe("selectionSort", () => {
    function generateSortingTest(arr, cmp) {
        it("should selectionSort the array correctly", () => {
            expect(
                isSortingAlgorithmValid(selectionSort, arr, cmp)
            ).toBe(true);
        });
    }

    Object.values(arrayFactoryUtils)
        .forEach((generateArray) => {
            generateSortingTest(generateArray());
        });
});