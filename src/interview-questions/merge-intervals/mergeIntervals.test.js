const mergeIntervals = require('./mergeIntervals')

describe('mergeIntervals', () => { 
    it('should merge intervals', () => {
        expect(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]))
            .toEqual([[1,6],[8,10],[15,18]]);
    }); 

    it('should merge intervals', () => {
        expect(mergeIntervals([[1,4],[4,5]]))
            .toEqual([[1,5]]);
    }); 
});
