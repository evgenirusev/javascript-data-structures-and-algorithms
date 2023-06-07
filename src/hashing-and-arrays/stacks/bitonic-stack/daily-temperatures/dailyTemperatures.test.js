const dailyTemperatures = require('./dailyTemperatures');

describe('dailyTemperatures', () => {
  it('should return an array of length 0 when input temperatures array is empty', () => {
    const temperatures = [];
    const result = dailyTemperatures(temperatures);
    expect(result.length).toBe(0);
  });

  it('should return an array with all elements as 0 when input temperatures array has only one element', () => {
    const temperatures = [30];
    const result = dailyTemperatures(temperatures);
    expect(result).toEqual([0]);
  });

  it('should correctly calculate the number of days until a warmer temperature for each element', () => {
    const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
    const result = dailyTemperatures(temperatures);
    expect(result).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
  });

  it('should correctly handle input with decreasing temperatures', () => {
    const temperatures = [80, 75, 70, 65, 60];
    const result = dailyTemperatures(temperatures);
    expect(result).toEqual([0, 0, 0, 0, 0]);
  });
});
