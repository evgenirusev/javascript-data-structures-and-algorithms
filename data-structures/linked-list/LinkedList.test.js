const LinkedList = require("./LinkedList");

describe("LinkedList", () => {
    it("should peek a correct tail value", () => {
        const linkedList = new LinkedList();
        linkedList.addToTail(1);
        linkedList.addToTail(2);
        linkedList.addToTail(13);

        expect(linkedList.peekTail()).toBe(13);
    });

    it("should peek a correct head value", () => {
        const linkedList = new LinkedList();
        linkedList.addToTail(1);
        linkedList.addToHead(4);
        linkedList.addToHead(3);

        expect(linkedList.peekHead()).toBe(4);
    });
});