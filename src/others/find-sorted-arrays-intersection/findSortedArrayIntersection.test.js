const findSortedArrayIntersections = "./findSortedArrayIntersections";

describe("findSortedArrayIntersections", () => {
    it("should find the intersections", () => {
        const sortedArray1 = [1, 4, 7, 9, 14, 16, 20];
        const sortedArray2 = [0, 3, 4, 6, 8, 14, 20];

        expect(findSortedArrayIntersections(sortedArray1, sortedArray2))
            .toEqual([4, 14, 20]);
    });
});
