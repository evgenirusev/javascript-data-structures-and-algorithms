function knapsack(knapsackCapacity, itemWeights, itemValues, numItems) {
    const optimalValues = new Array(numItems + 1)
        .fill().map(
            () => new Array(knapsackCapacity + 1)
                .fill(0)
        );

    for (let i = 0; i <= numItems; i++) {
      for (let j = 0; j <= knapsackCapacity; j++) {
        if (i === 0 || j === 0) {
          optimalValues[i][j] = 0;
        } else if (itemWeights[i-1] <= j) {
          optimalValues[i][j] = Math.max(
                    itemValues[i-1] + optimalValues[i-1][j-itemWeights[i-1]],
                    optimalValues[i-1][j]
                );
        } else {
          optimalValues[i][j] = optimalValues[i-1][j];
        }
      }
    }
  
    return optimalValues[numItems][knapsackCapacity];
}

module.exports = knapsack;