const RedBlackTree = require("./RedBlackTree");
const { insertMockValues } = require("../../unit-test-utils/treeUnitTestUtils");

describe("RedBlackTree", () => {
    const mockValues = [25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90];
    let tree;

    beforeEach(() => {
        tree = new RedBlackTree();
    });

    describe("Tree traversal", () => {
        const generateTraversalTest = (procedure, valuesToInsert, assertionResult) => {
            it(`should execute the callback for each value ${procedure}`, () => {
                const result = [];
                const mockCallback = (arr) => (val) => arr.push(val);
                const curriedCallbackMock = mockCallback(result);
                insertMockValues(tree, valuesToInsert);

                tree[procedure](curriedCallbackMock);
                expect(result).toEqual(assertionResult);
            });
        }

        generateTraversalTest("inorder", [5, 4, 3, 2, 1], [1, 2, 3, 4, 5]);
        generateTraversalTest("inorder", mockValues, [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]);
        generateTraversalTest("preorder", [5, 4, 3, 2, 1], [4, 2, 1, 3, 5]);
    });
});