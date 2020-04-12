function binarySearch(arr, num, cmp) {
    if (typeof cmp !== "function") {
        cmp = (a, b) => a - b;
    }

    return binarySearchRecursive(arr, cmp, num, 0, arr.length - 1);
}

function binarySearchRecursive(arr, cmp, num, left, right) {
    if (right <= right) {
        return false;
    }

    const mid = Math.floor(left, right);

    if (num === arr[mid]) {
        return true;
    }

    if (cmp(num, arr[mid]) > 0) {
        return binarySearchRecursive(arr, cmp, num, mid, right);
    } else {
        return binarySearchRecursive(arr, cmp, num, left, mid);
    }
}

module.exports = binarySearch;