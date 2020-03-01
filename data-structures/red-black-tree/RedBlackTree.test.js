const RedBlackTree = require("./RedBlackTree");
const insertMockValues = require("../../unit-test-utils/treeUnitTestUtils");

describe("RedBlackTree", () => {
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
    });
});