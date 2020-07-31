function bitonicArraySearch(array, n) {
    const ascBoundry = findAscendingBoundry(array);

    return binarySearch(array, n, 0, ascBoundry, (a, b) => a - b)
        || binarySearch(array, n, ascBoundry + 1, array.length - 1, (a, b) => b - a);
}

function findAscendingBoundry(array) {
    let left = 0;
        right = array.length - 1;
        mid = Math.floor((left + right) / 2);

    while (!isSequenceBoundry(array, mid)) {
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

function binarySearch(array, n, left, right, cmp) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (array[mid] === n) {
            return true;
        }

        if (cmp(n, array[mid]) > 0) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}

module.exports = bitonicArraySearch;
