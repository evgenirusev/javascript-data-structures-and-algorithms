const bitonicArraySearch = require("./bitonicArraySearch.js");

describe("bitonicArraySearch", () => {
    it("should find the element with descending sequence boundry being on the right", () => {
        const bitonicArray = [3, 9, 14, 20, 17, 5, 1];

        expect(bitonicArraySearch(bitonicArray, 3)).toBe(true);
        expect(bitonicArraySearch(bitonicArray, 9)).toBe(true);
        expect(bitonicArraySearch(bitonicArray, 5)).toBe(true);
        expect(bitonicArraySearch(bitonicArray, 1)).toBe(true);
        expect(bitonicArraySearch(bitonicArray, 20)).toBe(true);
    });
     
    it("should find the element with descending sequence boundry being on the left", () => {
        const bitonicArray = [7, 8, 6, 5, 4, 3, 2, 1];

        expect(bitonicArraySearch(bitonicArray, 7)).toBe(true);
        expect(bitonicArraySearch(bitonicArray, 8)).toBe(true);
        expect(bitonicArraySearch(bitonicArray, 6)).toBe(true);
        expect(bitonicArraySearch(bitonicArray, 5)).toBe(true);
        expect(bitonicArraySearch(bitonicArray, 1)).toBe(true);
    });

    it("shouldn't find the element", () => {
        const bitonicArray = [3, 9, 8, 20, 17, 5, 1];

        expect(bitonicArraySearch(bitonicArray, 100)).toBe(false);
    });
});
