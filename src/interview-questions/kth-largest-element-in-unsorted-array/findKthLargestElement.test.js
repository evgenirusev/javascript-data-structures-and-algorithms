const findKthLargestElement = require('./findKthLargestElement')

describe('findKthLargestElement', () => { 
   it('should find the kth largest element', () => {
       expect(findKthLargestElement([3,2,1,5,6,4], 2)).toBe(5);
   }); 

   it('should find the kth largest element', () => {
       expect(findKthLargestElement([3,2,3,1,2,4,5,5,6], 4)).toBe(4);
   }); 
});
