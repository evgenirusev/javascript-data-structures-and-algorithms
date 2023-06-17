const middleOfLinkedList = require('./middleOfLinkedList');

describe("middleOfLinkedList", () => {
    it('returns the middle node for odd number of nodes', () => {
        // Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
        const head = {
            val: 1,
            next: {
                val: 2,
                next: {
                    val: 3,
                    next: {
                        val: 4,
                        next: {
                            val: 5,
                            next: null
                        }
                    }
                }
            }
        };

        // Call the middleNode function
        const result = middleOfLinkedList(head);

        // Verify the result
        expect(result.val).toBe(3);
        expect(result.next.val).toBe(4);
        expect(result.next.next.val).toBe(5);
        expect(result.next.next.next).toBeNull();
    });

    it('returns the middle node for even number of nodes', () => {
        // Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6
        const head = {
            val: 1,
            next: {
                val: 2,
                next: {
                    val: 3,
                    next: {
                        val: 4,
                        next: {
                            val: 5,
                            next: {
                                val: 6,
                                next: null
                            }
                        }
                    }
                }
            }
        };

        // Call the middleNode function
        const result = middleOfLinkedList(head);

        // Verify the result
        expect(result.val).toBe(4);
        expect(result.next.val).toBe(5);
        expect(result.next.next.val).toBe(6);
        expect(result.next.next.next).toBeNull();
    });

    it('returns the single node for a list with only one node', () => {
        // Create a sample linked list: 1
        const head = {
            val: 1,
            next: null
        };

        // Call the middleNode function
        const result = middleOfLinkedList(head);

        // Verify the result
        expect(result.val).toBe(1);
        expect(result.next).toBeNull();
    });
});
