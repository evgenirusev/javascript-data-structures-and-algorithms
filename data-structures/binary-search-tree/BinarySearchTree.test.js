const BinarySearchTree = require("./BinarySearchTree");
const { insertMockValues, treeTraversalTest } = require("../../unit-test-utils/treeUnitTestUtils");

describe("BinarySearchTree", () => {
    const mockValues = [25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90];
    let bst;
    
    beforeEach(() => {
        bst = new BinarySearchTree();
    });

    describe("Tree traversal", () => {
        const generateTreeTraversalTest = (procedure, assertionResult) => {
            it(`should execute the callback for each value ${procedure}`, () => {
                const result = [];
                const mockCallback = function (arr) {
                    return function (val) {
                        arr.push(val);
                    }
                }
                const curriedCallbackMock = mockCallback(result);
                insertMockValues(bst, mockValues);
        
                bst[procedure](curriedCallbackMock);
                expect(result).toEqual(assertionResult);
            });
        }

        generateTreeTraversalTest("inorder", [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]);
        generateTreeTraversalTest("preorder", [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]);
        generateTreeTraversalTest("postorder", [4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25]);
    });

    it("should insert and find the min value", () => {
        insertMockValues(bst, mockValues);
        expect(bst.findMin()).toBe(4);
    });

    it("should find specific value", () => {
        insertMockValues(bst, mockValues);
        expect(bst.find(24)).toBe(24);
    });

    it("should't find specific value", () => {
        insertMockValues(bst, mockValues);
        expect(bst.find(100)).toBe(null);
    });

    it("should insert and find the max value", () => {
        insertMockValues(bst, mockValues);
        expect(bst.findMax()).toBe(90);
    });

    describe("remove", () => {
        it("should remove the correct element", () => {
            insertMockValues(bst, [25, 10, 30]);
            bst.remove(25);

            const result = [];
            const mockCallback = function (arr) {
                return function (val) {
                    arr.push(val);
                }
            }
            const curriedCallbackMock = mockCallback(result);
            bst.inorder(curriedCallbackMock);

            expect(result).toEqual([10, 30]);
        });

        it("should remove the correct element", () => {
            insertMockValues(bst, [25, 10, 5, 15]);
            bst.remove(25);

            const result = [];
            const mockCallback = function (arr) {
                return function (val) {
                    arr.push(val);
                }
            }
            const curriedCallbackMock = mockCallback(result);
            bst.inorder(curriedCallbackMock);

            expect(result).toEqual([5, 10, 15]);
        });

        it("should remove the correct element", () => {
            insertMockValues(bst, [25, 10, 50, 15, 5, 4, 7]);
            bst.remove(25);

            const result = [];
            const mockCallback = function (arr) {
                return function (val) {
                    arr.push(val);
                }
            }
            const curriedCallbackMock = mockCallback(result);
            bst.inorder(curriedCallbackMock);

            expect(result).toEqual([4, 5, 7, 10, 15, 50]);
        });

        it("should remove the correct element", () => {
            insertMockValues(bst, [25, 10, 50, 15, 5, 4, 7]);
            bst.remove(10);

            const result = [];
            const mockCallback = function (arr) {
                return function (val) {
                    arr.push(val);
                }
            }
            const curriedCallbackMock = mockCallback(result);
            bst.inorder(curriedCallbackMock);

            expect(result).toEqual([4, 5, 7, 15, 25, 50]);
        });

        it("should remove the correct element", () => {
            insertMockValues(bst, [5, 10]);
            bst.remove(5);

            const result = [];
            const mockCallback = function (arr) {
                return function (val) {
                    arr.push(val);
                }
            }
            const curriedCallbackMock = mockCallback(result);
            bst.inorder(curriedCallbackMock);

            expect(result).toEqual([10]);
        });
    });

    it("should be balanced", () => {
        insertMockValues(bst, [25, 15, 50, 7, 20, 29, 60]);

        expect(bst.isBalanced()).toBe(true);
    });

    it("shouldn't be balanced", () => {
        insertMockValues(bst, [25, 40, 15, 10, 5, 20]);

        expect(bst.isBalanced()).toBe(false);
    });

    it("should have a height of 2", () => {
        insertMockValues(bst, [25, 15, 50, 7, 20, 29, 60]);

        expect(bst.height).toBe(2);
    });

    it("should have a height of 3", () => {
        insertMockValues(bst, [25, 40, 15, 10, 5, 20]);

        expect(bst.height).toBe(3);
    });

    it("should have a diameter of 5", () => {
        insertMockValues(bst, [25, 40, 15, 10, 5, 20]);

        expect(bst.diameter).toBe(5);
    });

    it("should have a diameter of 2", () => {
        insertMockValues(bst, [25, 15]);

        expect(bst.diameter).toBe(2);
    });

    it("should have a diameter of 1", () => {
        insertMockValues(bst, [25]);

        expect(bst.diameter).toBe(1);
    });

    it("lowest common anscestor should be 12", () => {
        insertMockValues(bst, [20, 8, 22, 4, 12, 10, 14]);

        expect(bst.lowestCommonaAncestor(10, 14)).toBe(12);
    });

    it("lowest common anscestor should be 12", () => {
        insertMockValues(bst, [20, 8, 22, 4, 12, 10, 14]);

        expect(bst.lowestCommonaAncestor(14, 8)).toBe(8);
    });

    it("lowest common anscestor should be 12", () => {
        insertMockValues(bst, [20, 8, 22, 4, 12, 10, 14]);

        expect(bst.lowestCommonaAncestor(10, 22)).toBe(20);
    });
});