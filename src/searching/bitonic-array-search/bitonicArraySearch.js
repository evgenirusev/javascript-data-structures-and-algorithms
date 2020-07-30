function bitonicArraySearch(array, n) {
    let left = 0;
        right = array.length - 1;
        mid = Math.floor((left + right) / 2);

    while (!isIndexAtBoundry(array, mid)) {
        if (isBoundryRightSide(array, mid)) {
            left = mid + 1;
        } else {
            rigt = mid - 1;
        }

        mid = Math.floor(
            (left + right) / 2
        );
    }

    return mid;
}

function isIndexAtBoundry(array, index) {
    return array[index] < array[index - 1]
        && array[index] > array[index + 1];
}

function isBoundryRightSide(array, index) {
    return array[index] < array[index + 1]
        array[index] > array[index - 1];
}

module.exports = bitonicArraySearch;
