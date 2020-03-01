const RedBlackTree = require("./RedBlackTree");
const { insertMockValues } = require("../../unit-test-utils/treeUnitTestUtils");

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

        generateTraversalTest("inorder", [6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6]);
        generateTraversalTest("inorder", [5, 1, 0, 13, 7], [0, 1, 5, 7, 13]);

        generateTraversalTest("preorder", [6, 5, 4, 3, 2, 1], [5, 3, 2, 1, 4, 6]);
        generateTraversalTest("preorder", [5, 1, 0, 13, 7], [7, 1, 0, 5, 13]);

        generateTraversalTest("postorder", [6, 5, 4, 3, 2, 1], [1, 2, 4, 3, 6, 5]);
        generateTraversalTest("postorder", [5, 1, 0, 13, 7], [0, 5, 1, 13, 7]);
    });
});