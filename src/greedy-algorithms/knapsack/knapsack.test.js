describe('knapsack', () => {
    it('should return the maximum value for the given items', () => {
      const itemValues = [1, 2, 5, 6];
      const itemWeights = [2, 3, 4, 5];
      const knapsackCapacity = 8;
      const numItems = itemValues.length;
      const maximumValue = knapsack(knapsackCapacity, itemWeights, itemValues, numItems);
      expect(maximumValue).toEqual(8);
    });
  
    it('should return zero for zero knapsack capacity', () => {
      const itemValues = [1, 2, 5, 6];
      const itemWeights = [2, 3, 4, 5];
      const knapsackCapacity = 0;
      const numItems = itemValues.length;
      const maximumValue = knapsack(knapsackCapacity, itemWeights, itemValues, numItems);
      expect(maximumValue).toEqual(0);
    });
  
    it('should return zero for zero items', () => {
      const itemValues = [];
      const itemWeights = [];
      const knapsackCapacity = 10;
      const numItems = itemValues.length;
      const maximumValue = knapsack(knapsackCapacity, itemWeights, itemValues, numItems);
      expect(maximumValue).toEqual(0);
    });
  
    it('should return zero if no items fit in the knapsack', () => {
      const itemValues = [1, 2, 5, 6];
      const itemWeights = [10, 20, 30, 40];
      const knapsackCapacity = 5;
      const numItems = itemValues.length;
      const maximumValue = knapsack(knapsackCapacity, itemWeights, itemValues, numItems);
      expect(maximumValue).toEqual(0);
    });
});