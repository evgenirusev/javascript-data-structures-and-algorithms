const IntervalTree = require("./IntervalTree");

describe("IntervalTree", () => {
    let intervalTree;

    beforeEach(() => {
        intervalTree = new IntervalTree();
    });

    it("should insert into the interval tree and execute the callback inorder", () => {
        intervalTree.insert(20, 36);
        intervalTree.insert(3, 41);
        intervalTree.insert(29, 99);
        intervalTree.insert(0, 1);
        intervalTree.insert(10, 15);
        intervalTree.insert(25, 30);
        intervalTree.insert(60, 72);
    });
});