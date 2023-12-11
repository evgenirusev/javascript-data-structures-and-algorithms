const maxProfit = require('./maxProfit');

describe('maxProfit', () => {
    it('returns the maximum profit for a given array of prices', () => {
        const prices = [7, 1, 5, 3, 6, 4];
        const result = maxProfit(prices);
        expect(result).toEqual(5);
    });

    it('returns 0 when the prices array is empty', () => {
        const prices = [];
        const result = maxProfit(prices);
        expect(result).toEqual(0);
    });

    it('returns 0 when there is no profit to be made', () => {
        const prices = [7, 6, 4, 3, 1];
        const result = maxProfit(prices);
        expect(result).toEqual(0);
    });

    it('returns the maximum profit when the prices increase monotonically', () => {
        const prices = [1, 2, 3, 4, 5];
        const result = maxProfit(prices);
        expect(result).toEqual(4);
    });

    it('returns 0 when the prices decrease monotonically', () => {
        const prices = [5, 4, 3, 2, 1];
        const result = maxProfit(prices);
        expect(result).toEqual(0);
    });
});
