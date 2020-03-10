const IntervalTree = require("./IntervalTree");
const Interval = require("./Interval");

describe("IntervalTree", () => {
    let intervalTree;

    beforeEach(() => {
        intervalTree = new IntervalTree();
    });

    it("should insert into the interval tree and execute the callback inorder", () => {
        intervalTree.insert(new Interval(20, 36));
        intervalTree.insert(new Interval(3, 41));
        intervalTree.insert(new Interval(29, 99));
        intervalTree.insert(new Interval(0, 1));
        intervalTree.insert(new Interval(10, 15));
        intervalTree.insert(new Interval(25, 30));
        intervalTree.insert(new Interval(60, 72));
    });
});