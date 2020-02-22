const BinarySearchTree = require("./BinarySearchTree");

describe("BinarySearchTree", () => {
    const mockValues = [25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90];
    let bst;

    beforeEach(() => {
        bst = new BinarySearchTree();
    });

    const insertMockValues = (values = mockValues) => {
        values.forEach(val => {
            bst.insert(val);
        });
    }

    describe("Tree traversal", () => {
        const traversalUnitTestFactory = (procedure, assertionResult) => {
            it(`should execute the callback for each value preorder ${procedure}`, () => {
                const result = [];
                const mockCallback = function (arr) {
                    return function (val) {
                        arr.push(val);
                    }
                }
                const curriedCallbackMock = mockCallback(result);
                insertMockValues();
        
                bst[procedure](curriedCallbackMock);
                expect(result).toEqual(assertionResult);
            });
        }
    
        traversalUnitTestFactory("inorder", [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]);
        traversalUnitTestFactory("preorder", [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]);
        traversalUnitTestFactory("postorder", [4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25]);
    });

    it("should insert and find the min value", () => {
        insertMockValues();
        expect(bst.findMin()).toBe(4);
    });

    it("should find specific value", () => {
        insertMockValues();
        expect(bst.find(24)).toBe(24);
    });

    it("should't find specific value", () => {
        insertMockValues();
        expect(bst.find(100)).toBe(null);
    });

    it("should insert and find the max value", () => {
        insertMockValues();
        expect(bst.findMax()).toBe(90);
    });

    describe("remove", () => {
        it("should remove the correct element", () => {
            const values = [25, 10, 30];

            insertMockValues(values);
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
            const values = [25, 10, 5, 15];

            insertMockValues(values);
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
            const values = [25, 10, 50, 15, 5, 4, 7];

            insertMockValues(values);
            bst.remove(25);

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
    });
});