const bitonicArraySearch = require("./bitonicArraySearch.js");

describe("bitonicArraySearch", () => {
    it("should find the element", () => {
        const bitonicArray = [-3, 9, 8, 20, 17, 5, 1];

        expect(bitonicArraySearch(bitonicArray, 9), true);
        expect(bitonicArraySearch(bitonicArray, -3), true);
        expect(bitonicArraySearch(bitonicArray, 5), true);
        expect(bitonicArraySearch(bitonicArray, 1), true);
        expect(bitonicArraySearch(bitonicArray, 20), true);
    });

    it("shouldn't find the element", () => {
        const bitonicArray = [-3, 9, 8, 20, 17, 5, 1];

        expect(bitonicArraySearch(bitonicArray, 100), false);
    });
});
