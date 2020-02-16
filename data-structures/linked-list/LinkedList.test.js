const LinkedList = require("./LinkedList");

describe("LinkedList", () => {
    let linkedList;

    beforeEach(() => {
        linkedList = new LinkedList();
    });

    it("should peek a correct tail value", () => {
        linkedList.addToTail(1);
        linkedList.addToTail(2);
        linkedList.addToTail(13);

        expect(linkedList.peekTail()).toBe(13);
    });

    it("should peek a correct head value", () => {
        linkedList.addToTail(1);
        linkedList.addToHead(4);
        linkedList.addToHead(3);

        expect(linkedList.peekHead()).toBe(3);
    });

    it("should be empty", () => {
        expect(linkedList.isEmpty()).toBe(true);
    });

    it("should be empty", () => {
        linkedList.addToTail(3);
        linkedList.addToTail(5);

        expect(linkedList.isEmpty()).toBe(false);
    });
});