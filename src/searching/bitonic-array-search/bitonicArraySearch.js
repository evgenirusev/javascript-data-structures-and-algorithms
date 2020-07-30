function bitonicArraySearch(array, n) {
    let mid = Math.floor(0, array.length - 1);

    while (!isDescendingSequenceBoundry(array, mid)) {
    }
}

function isIndexAtBoundry(array, index) {
    return array[index] < array[index - 1]
        && array[index] > array[index + 1];
}

function isBoundryLeftSide(array, index) {
    return array[index] < array[index + 1]
        array[index] > array[index - 1];
}

function isBoundryRightSide(array, index) {
    return array[index] < array[index + 1]
        array[index] > array[index - 1];
}

module.exports = bitonicArraySearch;
