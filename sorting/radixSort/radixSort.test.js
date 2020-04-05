const radixSort = require("./radixSort");
const arrayFactoryUtils = require("../../mocks/arrayFactoryUtils");

describe("radixSort", () => {
    // it("should sort two element array", () => {
    //     expect(radixSort([3, 2, 1]))
    //         .toEqual([1, 2, 3]);
    // });

    it("should sort two element array", () => {
        expect(radixSort(arrayFactoryUtils.getLargeNumberArray()))
            .toEqual(arrayFactoryUtils.getLargeNumberArray().sort());
    });

    it("should sort two element array", () => {
        expect(radixSort(arrayFactoryUtils.getTwoElementArray()))
            .toEqual([1, 2]);
    });

    it("should sort the array", () => {
        expect(radixSort(arrayFactoryUtils.getUnsortedArray()))
            .toEqual(arrayFactoryUtils.getSortedArray());
    });
});