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

    it("should have executed a callback for each element", () => {
        const mockCallback = jest.fn();
        linkedList.addToHead(1);
        linkedList.addToTail(2);
        linkedList.addToTail(3);

        linkedList.inorder(mockCallback);
        expect(mockCallback.mock.calls.length).toBe(3);
    });

    it("should transform the values to an array", () => {
        const values = [1, 2, 3, 4, 5];

        values.forEach(val => {
            linkedList.addToTail(val);
        });

        expect(linkedList.toArray()).toEqual(values);
    });

    it("should reverse the list", () => {
        const values = [1, 2, 3, 4, 5];
        const reversed = [5, 4, 3, 2, 1];

        values.forEach(val => {
            linkedList.addToTail(val);
        });
        linkedList.reverse()

        expect(linkedList.toArray()).toEqual(reversed);
    });

    it("should find the value", () => {
        linkedList.addToTail(1);
        linkedList.addToTail(2);
        linkedList.addToTail(3);

        expect(linkedList.valueExists(2)).toBe(true);
    });

    describe("remove operation", () => {
        it("should remove value", () => {
            const values = [1, 2, 3, 4, 5];

            values.forEach(val => {
                linkedList.addToTail(val);
            });

            linkedList.remove(2);

            expect(linkedList.toArray()).toEqual([1, 3, 4, 5]);
        });

        it("should remove value", () => {
            linkedList.addToTail(2);

            linkedList.remove(2);

            expect(linkedList.toArray()).toEqual([]);
        });
    });
});
