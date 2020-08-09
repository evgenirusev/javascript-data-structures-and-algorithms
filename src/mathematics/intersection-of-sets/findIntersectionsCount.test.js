const findIntersectionsCount = require("./findIntersectionsCount.js");
const Point = require("../../data-structures/mathematics/Point");
const quickSort = require("../../sorting/quick-sort/hoare-median-pivot/quickSort.js")

describe('findIntersectionsCount', () => {
    it("should find the intersecting points", () => {
        const set1 = [
            new Point(3, 4),
            new Point(1, 2),
            new Point(7, 5),
            new Point(6, 2),
            new Point(1, 3)
        ];

        const set2 = [
            new Point(1, 2),
            new Point(2, 2),
            new Point(6, 5),
            new Point(2, 3),
            new Point(6, 2)
        ];

        expect(findIntersectionsCount(set1, set2)).toEqual(2);
    });
});
