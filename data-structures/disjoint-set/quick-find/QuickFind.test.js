const QuickFind = require("./QuickFind");

describe('QuickFind', () => {
    let quickFind;
    let mockNodes;

    beforeEach(() => {
        mockNodes = [
            {
                id: 1,
                data: 123
            },
            {
                id: 2,
                data: 123
            },
            {
                id: 3,
                data: 123
            },
            {
                id: 4,
                data: 123
            },
        ];

        quickFind = new QuickFind(mockNodes);
    });

    it('should be connected', () => {
        quickFind.union(1, 2);
        quickFind.union(2, 3);
        expect(quickFind.areConnected(1, 2)).toBe(true);
        expect(quickFind.areConnected(1, 3)).toBe(true);
        expect(quickFind.areConnected(3, 2)).toBe(true);
    });

    it('should be connected', () => {
        quickFind.addNode(
            {
                id: 5,
                data: 123
            }
        );

        quickFind.union(1, 5);
        quickFind.union(1, 2);
        expect(quickFind.areConnected(2, 5)).toBe(true);
    });
});