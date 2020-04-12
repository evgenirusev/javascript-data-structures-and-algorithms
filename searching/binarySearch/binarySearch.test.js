const binarySearch = require("./binarySearch");
const arrayFactoryUtils = require("../../mocks/arrayFactoryUtils");

describe("binarySearch", () => {
    it("should find the correct element", () => {
        expect(binarySearch(arrayFactoryUtils.getTwoElementArray(), 1)).toEqual(true);
    });

    it("should find the correct element", () => {
        expect(binarySearch(arrayFactoryUtils.getSortedArray(), 1)).toEqual(true);
    });

    it("should find the correct element", () => {
        expect(binarySearch(arrayFactoryUtils.getSortedArray(), 50)).toEqual(false);
    });

    it("should find the correct element", () => {
        expect(binarySearch(arrayFactoryUtils.getSortedArray(), 3)).toEqual(true);
    });

    it("should find the correct element", () => {
        expect(binarySearch(arrayFactoryUtils.getSortedArray(), 20)).toEqual(true);
    });
});