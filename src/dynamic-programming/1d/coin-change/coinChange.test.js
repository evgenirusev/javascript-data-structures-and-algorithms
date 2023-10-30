const coinChange = require('./coinChange');

describe('coinChange function', () => {
    it('returns the minimum number of coins needed to make up the amount', () => {
        expect(coinChange([1, 2, 5], 11)).toEqual(3);
        expect(coinChange([2], 3)).toEqual(-1);
    });

    it('handles edge cases and special scenarios', () => {
        expect(coinChange([1], 0)).toEqual(0);
        expect(coinChange([2, 5, 10], 8)).toEqual(4);
    });
});
