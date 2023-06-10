function kadanes(arr) {
    let globalMax = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        globalMax = Math.max(globalMax, currentSum);
    }

    return globalMax;
}

module.exports = kadanes;