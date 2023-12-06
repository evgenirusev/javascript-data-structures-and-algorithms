function binarySearch(arr, num, cmp) {
    if (typeof cmp !== "function") {
        cmp = (a, b) => a - b;
    }

    let left = 0,
        right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === num) {
            return true;
        }

        if (cmp(num, arr[mid]) > 0) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}

module.exports = binarySearch;