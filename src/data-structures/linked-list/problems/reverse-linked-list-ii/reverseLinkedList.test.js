const reverseBetween = require('./reverseLinkedList');

describe("reverseBetween", () => {
    it('should reverse a sublist between left and right indices', () => {
        // Arrange
        const head = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } };
        const left = 2;
        const right = 4;

        // Act
        const result = reverseBetween(head, left, right);

        // Assert
        expect(result.val).toBe(1);
        expect(result.next.val).toBe(4);
        expect(result.next.next.val).toBe(3);
        expect(result.next.next.next.val).toBe(2);
        expect(result.next.next.next.next.val).toBe(5);
        expect(result.next.next.next.next.next).toBe(null);
    });

    it('should handle empty list', () => {
        // Arrange
        const head = null;
        const left = 2;
        const right = 4;

        // Act
        const result = reverseBetween(head, left, right);

        // Assert
        expect(result).toBe(null);
    });

    it('should handle single-node list', () => {
        // Arrange
        const head = { val: 1, next: null };
        const left = 1;
        const right = 1;

        // Act
        const result = reverseBetween(head, left, right);

        // Assert
        expect(result.val).toBe(1);
        expect(result.next).toBe(null);
    });

    it('should handle reversing the entire list', () => {
        // Arrange
        const head = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } };
        const left = 1;
        const right = 5;

        // Act
        const result = reverseBetween(head, left, right);

        // Assert
        expect(result.val).toBe(5);
        expect(result.next.val).toBe(4);
        expect(result.next.next.val).toBe(3);
        expect(result.next.next.next.val).toBe(2);
        expect(result.next.next.next.next.val).toBe(1);
        expect(result.next.next.next.next.next).toBe(null);
    });
});
