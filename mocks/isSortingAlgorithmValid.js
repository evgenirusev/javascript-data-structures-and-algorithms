function isSortingAlgorithmValid(sortingCallback, array, cmp) {
    if (typeof cmp !== "function") {
        cmp = (a, b) => a - b;
    }

    const resultArray = sortingCallback(array, cmp).toString();
    const expectedArray = array.sort(cmp).toString();

    if (resultArray === expectedArray) {
        return true;
    } else {
        throw `Invalid sorting algorithm. Expected - ${expectedArray} Received - ${resultArray}`;
    }
}

module.exports = isSortingAlgorithmValid;