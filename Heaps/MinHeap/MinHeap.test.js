const MinHeap = require("./MinHeap");

describe("MinHeap", () => {
    const heap;

    beforeEach(() => {
        heap = new MinHeap();
    });

    it("should extract the minumum value correctly", () => {
        const valuesToInsert = [5, 13, 32, 4, 6];
        valuesToInsert.forEach(heap.insert.bind(heap));

        const expectedValues = [4, 5, 6, 13, 32];

        expectedValues.forEach(val => {
            expect(heap.extractMin()).toEqual(val);
        });
    });

    it("should find the min value", () => {
        heap.insert(5);
        expect(heap.top).toBe(5);
    });
});