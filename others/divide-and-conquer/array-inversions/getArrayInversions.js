function getArrayInversions(arr) {
    sortAndCountInversions(arr, 0, arr.length - 1);
}

function sortAndCountInversions(arr, left, right) {
    if (arr.length <= 1) {
        return 0;
    }

    const mid = Math.floor(n / 2);

    const leftInvCount = sortAndCountInversions(arr, left, mid);
    const rightInvCount = sortAndCountInversions(arr, mid + 1, right);
    const splitInvCount = countSplitInversions(arr, left, right);

    return leftInvCount + rightInvCount + splitInvCount;
}

module.exports = getArrayInversions;