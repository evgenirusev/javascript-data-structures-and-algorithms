const LinkedList = require("./LinkedList");

describe("LinkedList", () => {
    let linkedList;

    beforeEach(() => {
        linkedList = new LinkedList();
    });

    it("should peek a correct tail value", () => {
        linkedList.addToTail(1);
        linkedList.addToTail(2);
        linkedList.addToTail(3);

        expect(linkedList.peekTail()).toBe(3);
    });

    it("should peek a correct head value", () => {
        linkedList.addToTail(1);
        linkedList.addToHead(2);
        linkedList.addToHead(3);

        expect(linkedList.peekHead()).toBe(3);
    });

    it("should be empty", () => {
        expect(linkedList.isEmpty()).toBe(true);
    });

    it("should be empty", () => {
        linkedList.addToTail(1);
        linkedList.addToTail(2);

        expect(linkedList.isEmpty()).toBe(false);
    });

    it("should have a length of 4", () => {
        linkedList.addToTail(1);
        linkedList.addToHead(2);
        linkedList.addToHead(3);
        linkedList.addToTail(4);

        expect(linkedList.size()).toBe(4);
    });

    it("should delete the head element", () => {
        linkedList.addToHead(1);
        linkedList.addToHead(2);

        linkedList.deleteFromHead();
        expect(linkedList.peekHead()).toBe(1);
    });

    it("should delete the tail element", () => {
        linkedList.addToHead(1);
        linkedList.addToHead(2);
        linkedList.addToTail(3);

        linkedList.deleteFromTail();
        expect(linkedList.peekTail()).toBe(1);
    });
});