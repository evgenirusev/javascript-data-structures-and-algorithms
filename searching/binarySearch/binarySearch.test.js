const binarySearch = require("./binarySearch");
const arrayFactoryUtils = require("../../mocks/arrayFactoryUtils");

describe("binarySearch", () => {
    it("should find the correct element", () => {
        expect(binarySearch(arrayFactoryUtils.getTwoElementArray(), 1)).toEqual(true);
    });
});