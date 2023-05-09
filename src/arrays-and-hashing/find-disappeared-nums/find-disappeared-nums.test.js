const findDisappearedNumbers = require('./findDisappearedNumbers');

describe('findDisappearedNumbers', () => {
  test('Example 1: [4,3,2,7,8,2,3,1]', () => {
    const nums = [4, 3, 2, 7, 8, 2, 3, 1];
    const result = findDisappearedNumbers(nums);
    expect(result).toEqual(expect.arrayContaining([5, 6]));
    expect(result.length).toBe(2);
  });

  test('Example 2: [1,1]', () => {
    const nums = [1, 1];
    const result = findDisappearedNumbers(nums);
    expect(result).toEqual(expect.arrayContaining([2]));
    expect(result.length).toBe(1);
  });
});