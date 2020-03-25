const SegmentTree = require("./SegmentTree");

describe("SegmentTree", () => {
    let segmentTree;

    it("should do a range query correctly", () => {
        const array = [1, 2, 3, 4, 5];
        segmentTree = new SegmentTree(array);

        expect(segmentTree.rangeQuery(0, array.length)).toBe(15);
    });
});