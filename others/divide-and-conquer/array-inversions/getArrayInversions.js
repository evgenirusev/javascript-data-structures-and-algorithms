function getArrayInversions(arr) {
    let numberOfInversions = 0;

    for (let i = arr.length - 1; i >= 1; i--) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[i] < arr[j]) {
                numberOfInversions++;
            }
        }
    }

    return numberOfInversions;
}

module.exports = getArrayInversions;