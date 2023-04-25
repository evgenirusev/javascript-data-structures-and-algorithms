const permutations = require('./permutations')

describe("permutations", () => {
    it("returns all possible permutations for an array with distinct integers", () => {
      const nums = [1, 2, 3];
      const expectedOutput = [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ];
      expect(permutations(nums)).toEqual(expectedOutput);
    });
  
    it("returns all possible permutations for an array with two distinct integers", () => {
      const nums = [0, 1];
      const expectedOutput = [
        [0, 1],
        [1, 0],
      ];
      expect(permutations(nums)).toEqual(expectedOutput);
    });
  
    it("returns the same array as the only possible permutation for an array with one integer", () => {
      const nums = [1];
      const expectedOutput = [[1]];
      expect(permutations(nums)).toEqual(expectedOutput);
    });
  });
