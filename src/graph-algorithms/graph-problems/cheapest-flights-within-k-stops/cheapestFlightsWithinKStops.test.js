const cheapestFlightsWithinKStops = require('./cheapestFlightsWithinKStops');

describe("cheapestFlightsWithinKStops function", () => {
    it('Example 1', () => {
        const n = 4;
        const flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]];
        const src = 0;
        const dst = 3;
        const k = 1;

        const result = cheapestFlightsWithinKStops(n, flights, src, dst, k);

        expect(result).toBe(700);
    });

    it('Example 2', () => {
        const n = 3;
        const flights = [[0,1,100],[1,2,100],[0,2,500]];
        const src = 0;
        const dst = 2;
        const k = 1;

        const result = cheapestFlightsWithinKStops(n, flights, src, dst, k);

        expect(result).toBe(200);
    });

    it('Example 3', () => {
        const n = 3;
        const flights = [[0,1,100],[1,2,100],[0,2,500]];
        const src = 0;
        const dst = 2;
        const k = 0;

        const result = cheapestFlightsWithinKStops(n, flights, src, dst, k);

        expect(result).toBe(500);
    });
});
