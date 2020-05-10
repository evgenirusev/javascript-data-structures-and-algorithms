const quickSelect = require("./quickSelect");

describe("quickSelect", () => {
    it("should find the element", () => {
        expect(quickSelect([4, 2, 9, 6], 3)).toBe(6);
    });
});