const Queue = require("./Queue.js");

describe("Queue", () => {
    let queue;

    beforeEach(() => {
        queue = new Queue();
    });

    it("should enqueue the elements", () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
        expect(queue.dequeue()).toBe(3);
    });
});
