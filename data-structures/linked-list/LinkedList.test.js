const LinkedList = require("./LinkedList");

describe("LinkedList", () => {
    it("should peek a correct value", () => {
        const linkedList = new LinkedList();

        linkedList.addToTail(1);
        linkedList.addToTail(2);

        expect(linkedList.peekTail()).toBe(2);
    });
});