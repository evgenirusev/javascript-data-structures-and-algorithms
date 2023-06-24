const Queue = require('./Queue');

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

    it("should be empty", () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        queue.dequeue();
        queue.dequeue();
        queue.dequeue();

        expect(queue.isEmpty()).toBe(true);
    });

    it("should not be empty", () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.isEmpty()).toBe(false);
    });
});
