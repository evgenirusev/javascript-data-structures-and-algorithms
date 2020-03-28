const RedBlackTree = require("./RedBlackTree");
const insertMockValues = require("../../../mocks/treeUnitTestUtils");

describe("RedBlackTree", () => {
    let tree;

    beforeEach(() => {
        tree = new RedBlackTree();
    });

    describe("Red Black Tree traversal", () => {
        const generateTraversalTest = (procedure, valuesToInsert, assertionResult) => {
            it(`should execute the callback for each value ${procedure}`, () => {
                const result = [];
                insertMockValues(tree, valuesToInsert);

                tree[procedure](result.push.bind(result));
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

    describe("remove procedure", () => {
        it("should delete the specified node and re-balance the tree", () => {
            const valueToRemove = 2;
            insertMockValues(tree, [5, 2, 8, 4]);
            tree.remove(valueToRemove);

            const result = [];
            tree.preorder(result.push.bind(result));

            expect(tree.find(valueToRemove)).toBe(null);
            expect(result).toEqual([5, 4, 8]);
        });
    });
});