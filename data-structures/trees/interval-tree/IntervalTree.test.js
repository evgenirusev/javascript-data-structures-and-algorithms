const IntervalTree = require("./IntervalTree");
const Interval = require("./Interval");

describe("IntervalTree", () => {
    let intervalTree;

    beforeEach(() => {
        intervalTree = new IntervalTree();
    });

    it("should insert into the interval tree and execute the callback inorder", () => {
        const intervals = [
            new Interval(20, 36),
            new Interval(3, 41),
            new Interval(29, 99),
            new Interval(0, 1),
            new Interval(10, 15),
            new Interval(25, 30),
            new Interval(60, 72)
        ];
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
        expect(expectedResult).toEqual(expected);
    });
});