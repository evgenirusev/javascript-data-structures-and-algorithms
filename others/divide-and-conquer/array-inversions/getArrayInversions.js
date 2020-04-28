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

    merge(arr, left, mid);
    merge(arr, mid + 1, right);

    const splitInvCount = countSplitInversions(arr, left, right);

    return leftInvCount + rightInvCount + splitInvCount;
}

function merge(arr, left, right) {
    const mid = Math.floor((left + right) / 2);
    const leftToRightArrLength = (right - left + 1);
    const auxArray = [];

    let leftCounter = left;
    let rightCounter = mid + 1;
    while (auxArray.length < leftToRightArrLength) {
        if (arr[leftCounter] < arr[rightCounter]) {
            auxArray.push(arr[leftCounter]);
            leftCounter++;
        } else {
            auxArray.push(arr[rightCounter]);
            rightCounter++;
        }
    }

    let auxArrayCounter = 0;
    for (let i = left; i <= right; i++) {
        arr[i] = auxArray[auxArrayCouter];
        auxArrayCounter++;
    }
}

module.exports = getArrayInversions;