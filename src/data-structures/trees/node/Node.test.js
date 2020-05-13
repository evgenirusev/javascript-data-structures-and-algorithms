const Node = require("./Node");

describe("Node", () => {
    it("should have the correct values", () => {
        const node = new Node(1);
        node.left = new Node(2);
        node.right = new Node(3);

        expect(node.val).toBe(1);
        expect(node.left.val).toBe(2);
        expect(node.right.val).toBe(3);
    })
})