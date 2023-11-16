const maxProfit = require('./maxProfit');

describe("maxProfit", () => {
    it('should return the max profit', () => {
        const result = maxProfit([1,2,3,0,2]);
        expect(result).toEqual(3);
    });

    it('should return the max profit', () => {
        const result = maxProfit([1,2,4]);
        expect(result).toEqual(3);
    });
});
