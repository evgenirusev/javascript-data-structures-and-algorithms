const BinaryHeap = require("./BinaryHeap");

describe("BinaryHeap", () => {
    let heap;

    beforeEach(() => {
        heap = new BinaryHeap();
    });

    it("(min heap) should extract the minumum values correctly", () => {
        const valuesToInsert = [5, 13, 32, 4, 6];
        valuesToInsert.forEach(heap.insert.bind(heap));

        const expectedValues = [4, 5, 6, 13, 32];

        expectedValues.forEach(val => {
            expect(heap.extract()).toEqual(val);
        });
    });

    it("(max heap) should extract the maximum values correctly", () => {
        const maxHeapComparator = (a, b) => b - a;
        heap = new BinaryHeap(maxHeapComparator);
        const valuesToInsert = [5, 13, 32, 4, 6];
        valuesToInsert.forEach(heap.insert.bind(heap));

        const expectedValues = [32, 13, 6, 5, 4];

        expectedValues.forEach(val => {
            expect(heap.extract()).toEqual(val);
        });
    });

    it("should find the correct value", () => {
        const lowestValue = 2;
        const valuesToInsert = [5, 13, 32, lowestValue, 4, 6];
        valuesToInsert.forEach(heap.insert.bind(heap));

        expect(heap.top).toBe(lowestValue);
    });

    it("should be empty", () => {
        const maxHeapComparator = (a, b) => b - a;
        heap = new BinaryHeap(maxHeapComparator);
        const valuesToInsert = [5, 13, 32, 4, 6];
        valuesToInsert.forEach(heap.insert.bind(heap));

        valuesToInsert.forEach(v => {
            heap.extract();
        });

        expect(heap.isEmpty).toBe(true);
    });
});