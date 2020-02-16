const LinkedList = require("./LinkedList");

describe("LinkedList", () => {
    it("should peek a correct value", () => {
        const linkedList = new LinkedList();

        linkedList.append(1);
        linkedList.append(2);

        expect(linkedList.peek()).toBe(2);
    });
});