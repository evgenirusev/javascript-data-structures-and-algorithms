function isSortingAlgorithmValid(sortingCallback, array, cmp) {
    if (typeof cmp !== "function") {
        cmp = (a, b) => a - b;
    }

    const expectedArray = [...array].sort(cmp).toString();
    const resultArray = sortingCallback(array, cmp).toString();

    if (resultArray === expectedArray) {
        return true;
    } else {
        throw `Invalid sorting algorithm. Array to be sorted - ${array}\n Expected - ${expectedArray}\n Received - ${resultArray}`;
    }
}

module.exports = isSortingAlgorithmValid;