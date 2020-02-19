const BinarySearchTree = require("./BinarySearchTree");

describe("BinarySearchTree", () => {
    let bst;

    beforeEach(() => {
        bst = new BinarySearchTree();
    });

    it("should insert and find the min value", () => {
        const values = [7, 5, 2, 8, 1, 3];

        values.forEach(val => {
            bst.insert(val);
        });

        expect(bst.findMin()).toBe(1);
    });

    it("should execute the callback for each value in order", () => {
        const result = [];
        const mockCallback = (function(val) {
            const assertionArray = arguments[0];
            assertionArray.push(val);
        }).bind(undefined, result);

        const values = [7, 5, 2, 8, 1, 3];

        values.forEach(val => {
            bst.insert(val);
        });

        bst.inorder(mockCallback);

        expect(result).toEqual([1, 2, 3, 5, 7, 8]);
    });
});