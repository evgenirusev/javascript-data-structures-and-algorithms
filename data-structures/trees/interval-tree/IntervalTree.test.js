const IntervalTree = require("./IntervalTree");
const Interval = require("./Interval");
const insertMockValues = require("../../../unit-test-utils/treeUnitTestUtils");

describe("IntervalTree", () => {
    let intervalTree;
    let intervals;

    beforeEach(() => {
        intervalTree = new IntervalTree();
        intervals = [
            new Interval(20, 36),
            new Interval(3, 41),
            new Interval(29, 99),
            new Interval(0, 1),
            new Interval(10, 15),
            new Interval(25, 30),
            new Interval(60, 72)
        ];
    });

    it("should insert into the interval tree and execute the callback inorder", () => {
        intervals.forEach(interval => intervalTree.insert(interval));

        const result = [];
        intervalTree.inorder(result.push.bind(result));

        const expectedResult = [
            new Interval(0, 1),
            new Interval(3, 41),
            new Interval(10, 15),
            new Interval(20, 36),
            new Interval(25, 30),
            new Interval(29, 99),
            new Interval(60, 72)
        ];
        expect(result).toEqual(expectedResult);
    });

    it("should find an interval which is overlapping - hit low", () => {
        insertMockValues(intervalTree, intervals);
        const interval = new Interval(10, 25);

        expect(intervalTree.findAnyOverlapping(interval)).toEqual(new Interval(20, 36));
    });

    it("should find an interval which is overlapping - hit high", () => {
        insertMockValues(intervalTree, intervals);
        const interval = new Interval(30, 40);

        expect(intervalTree.findAnyOverlapping(interval)).toEqual(new Interval(20, 36));
    });

    it("should find an interval which is overlapping - hit center", () => {
        insertMockValues(intervalTree, intervals);
        const interval = new Interval(25, 27);

        expect(intervalTree.findAnyOverlapping(interval)).toEqual(new Interval(20, 36));
    });

    it("should't find an interval which is overlapping", () => {
        insertMockValues(intervalTree, intervals);
        const interval = new Interval(-1, -2);

        expect(intervalTree.findAnyOverlapping(interval)).toEqual(null);
    });

    it("should find all intervals which are overlapping", () => {
        insertMockValues(intervalTree, intervals);
        const interval = new Interval(16, 35);

        expect(intervalTree.findAllOverlapping(interval)).toEqual([
            new Interval(3, 41),
            new Interval(20, 36),
            new Interval(25, 30),
            new Interval(29, 99)
        ]);
    });

    it("should find all intervals which are overlapping", () => {
        insertMockValues(intervalTree, intervals);
        const interval = new Interval(7, 80);
        
        expect(intervalTree.findAllOverlapping(interval)).toEqual([
            new Interval(3, 41),
            new Interval(10, 15),
            new Interval(20, 36),
            new Interval(25, 30),
            new Interval(29, 99),
            new Interval(60, 72)
        ]);
    });
});