const networkDelayTime = require('./networkDelayTime'); // Update the path accordingly

describe("networkDelayTime", () => {
    it('should return the correct delay time for a valid input', () => {
        const times = [
            [2, 1, 1],
            [2, 3, 2],
            [1, 3, 4]
        ];
        const n = 3;
        const k = 2;
        expect(networkDelayTime(times, n, k)).toBe(3);
    });

    it('should return -1 for an unreachable node', () => {
        const times = [
            [2, 1, 1],
            [2, 3, 2],
            [1, 3, 4]
        ];
        const n = 3;
        const k = 1;
        expect(networkDelayTime(times, n, k)).toBe(-1);
    });
});
