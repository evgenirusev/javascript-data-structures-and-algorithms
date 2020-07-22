const Stack = require("../../stacks/linked-list-implementation/Stack.js");

class Queue {
    // todo: fix imports once unit tests are successful
    constructor() {
        this.inputStack = new Stack();
        this.outputStack = new Stack();
    }

    enqueue(val) {
        this.inputStack.push(val);
    }
    
    dequeue() {
        if (this.outputStack.isEmpty()) {
            if (this.inputStack.isEmpty()) {
                throw 'Invalid operation: queue is already empty!';
            }

            while (!this.inputStack.isEmpty()) {
                this.outputStack.push(
                         this.inputStack.pop()
                    );
            }
        }

        return this.outputStack.pop();
    }
}

module.exports = Queue;
