const areStringsIsomorphic = require("./areStringsIsomorphic");

describe('areStringsIsomorphic', () => {
    it("should be isomorphic", () => {
        expect(areStringsIsomorphic("egg", "add")).toEqual(true);
    });

    it("shouldn't be isomorphic", () => {
        expect(areStringsIsomorphic("foo", "bar")).toEqual(false);
    });
});
