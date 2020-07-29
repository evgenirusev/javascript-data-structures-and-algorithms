const binarySearch = require("./binarySearch");
const arrayFactoryUtils = require("../../../mocks/arrayFactoryUtils");

describe("binarySearch", () => {
    function generateSearchingTest(testCaseName, array, num, assertionResult) {
        it(testCaseName, () => {
            expect(binarySearch(array, num))
                .toEqual(assertionResult);
        });
    }

    generateSearchingTest("should find an element in two element array", arrayFactoryUtils.getTwoElementArray(), 1, true);
    generateSearchingTest("should find left most element", arrayFactoryUtils.getSortedArray(), 1, true);
    generateSearchingTest("should find right most element", arrayFactoryUtils.getSortedArray(), 20, true);
    generateSearchingTest("should't find non existing element", arrayFactoryUtils.getSortedArray(), 50, false);
    generateSearchingTest("should find an element", arrayFactoryUtils.getSortedArray(), 0, false);
    generateSearchingTest("should find an element", arrayFactoryUtils.getSortedArray(), 3, true);
});
