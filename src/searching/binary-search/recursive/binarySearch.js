function binarySearch(arr, num, cmp) {
    if (typeof cmp !== "function") {
        cmp = (a, b) => a - b;
    }

    return binarySearchRecursive(arr, cmp, num, 0, arr.length - 1);
}

function binarySearchRecursive(arr, cmp, num, left, right) {
    const mid = Math.floor((left + right) / 2);

    if (num === arr[mid]) {
        return true;
    }

    if (right <= left) {
        return false;
    }

    if (cmp(num, arr[mid]) > 0) {
        return binarySearchRecursive(arr, cmp, num, mid + 1, right);
    } else {
        return binarySearchRecursive(arr, cmp, num, left, mid - 1);
    }
}

module.exports = binarySearch;
