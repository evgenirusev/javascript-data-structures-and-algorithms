const isMatch = require('./isMatch')

describe('isMatch', () => { 
   it("should't match", () => {
       expect(isMatch("aa", "a")).toBe(false);
   }); 

   it('should match', () => {
       expect(isMatch("aa", "*")).toBe(true);
   }); 

   it("shouldn't match", () => {
       expect(isMatch("cb", "?a")).toBe(false);
   }); 

   it('should match', () => {
       expect(isMatch("adceb", "*a*b")).toBe(true);
   });

   it("shouldn't match", () => {
       expect(isMatch("acdcb", "*a?b")).toBe(false);
   }); 
});
