const Stack = require("./Stack.js");

describe("Stack", () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    it("should push the elements", () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.pop()).toBe(3);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(1);
    });

    it("should have correct size", () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.size()).toBe(3);
        stack.pop();
        expect(stack.size()).toBe(2);
        stack.pop();
        expect(stack.size()).toBe(1);
        stack.pop();
        expect(stack.size()).toBe(0);
    });
});
