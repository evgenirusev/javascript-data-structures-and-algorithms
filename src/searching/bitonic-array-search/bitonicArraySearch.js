function bitonicArraySearch(array, n) {
    return findBoundry(array);
}

function findBoundry(array) {
    let left = 0;
        right = array.length - 1;
        mid = Math.floor((left + right) / 2);

    while (!isSequenceBoundry(array, mid)) {
        console.log("adfasd");
        if (isBoundryLeftSide(array, mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }

        mid = Math.floor(
            (left + right) / 2
        );
    }

    return mid;
}

function isSequenceBoundry(array, index) {
    return array[index] > array[index - 1]
        && array[index] > array[index + 1];
}

function isBoundryLeftSide(array, index) {
    return array[index] < array[index - 1];
}

module.exports = bitonicArraySearch;
