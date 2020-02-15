const MinHeap = require("./MinHeap");

describe("MinHeap", () => {
    let heap;

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
        const lowestValue = 2;
        const valuesToInsert = [5, 13, 32, lowestValue, 4, 6];
        valuesToInsert.forEach(heap.insert.bind(heap));

        expect(heap.top).toBe(lowestValue);
    });
});