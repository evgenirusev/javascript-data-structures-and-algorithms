const Queue = require("./Queue");

describe("Queue", () => {
    let queue;

    beforeEach(() => {
        queue = new Queue();
    });

    it("should enqueue the elements", () => {
        quque.enqueue(1);
        quque.enqueue(2);
        quque.enqueue(3);

        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
        expect(queue.dequeue()).toBe(3);
    });
});
