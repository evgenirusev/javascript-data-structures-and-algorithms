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
        const mockCallback = function(arr) {
            return function(val) {
                arr.push(val);
            }
        }
        const result = [];
        const curriedCallbackMock = mockCallback(result);
        const values = [7, 5, 2, 8, 1, 3];
        values.forEach(val => {
            bst.insert(val);
        });

        bst.inorder(curriedCallbackMock);
        expect(result).toEqual([1, 2, 3, 5, 7, 8]);
    });

    it("should execute the callback for each value in preorder", () => {
        const mockCallback = function(arr) {
            return function(val) {
                arr.push(val);
            }
        }
        const result = [];
        const curriedCallbackMock = mockCallback(result);
        const values = [1];
        values.forEach(val => {
            bst.insert(val);
        });

        bst.inorder(curriedCallbackMock);
        expect(result).toEqual([7, 5, 8, 2, 3, 1]);
    });
});