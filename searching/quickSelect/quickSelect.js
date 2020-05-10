function quickSelect(arr, kthLargest) {
    if (kthLargest > arr.length && kthLargest < 0) {
        throw `invalid argument`;
    }

    return quickSelectRecursive(arr, 0, arr.length - 1, kthLargest);
}

function quickSelectRecursive(arr, left, right, kthLargest) {
    if (left >= right) {
        return arr[left];
    }
}

module.exports = quickSelect;