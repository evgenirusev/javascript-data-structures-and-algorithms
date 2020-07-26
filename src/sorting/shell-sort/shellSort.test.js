const shellSort = require("./shellSort");
const isSortingAlgorithmValid = require("../../mocks/isSortingAlgorithmValid");
const arrayFactoryUtils = require("../../mocks/arrayFactoryUtils");

describe("shellSort", () => {
    it("should test", () => {
        let arr = [9, 8, 3, 7, 5, 6, 4, 1];

        shellSort(arr);

        expect(arr).toEqual([1, 3, 4, 5, 6, 7, 8, 9]);
    });
    // function generateSortingTest(arr, cmp) {
    // it("should shellSort the array correctly", () => {
    // expect(
    // isSortingAlgorithmValid(shellSort, arr, cmp)
    // ).toBe(true);
    // });
    // }

    // Object.values(arrayFactoryUtils)
    // .forEach((generateArray) => {
    // generateSortingTest(generateArray());
    // });
});
