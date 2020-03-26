const SegmentTree = require("./SegmentTree");

describe("SegmentTree", () => {
    let segmentTree;

    it("should do a range query correctly", () => {
        const array = [1, 2, 3, 4, 5];
        segmentTree = new SegmentTree(array);

        expect(segmentTree.rangeQuery(0, array.length - 1)).toBe(15);
    });

    it("should do a range query correctly", () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        segmentTree = new SegmentTree(array);

        expect(segmentTree.rangeQuery(0, array.length - 1)).toBe(105);
    });

    it("should do a range query correctly", () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        segmentTree = new SegmentTree(array);

        expect(segmentTree.rangeQuery(0, 4)).toBe(15);
    });
});