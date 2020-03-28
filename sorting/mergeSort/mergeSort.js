function mergeSort(arr, cmp) {
    if (typeof cmp !== "function") {
        cmp = (a, b) => a - b;
    }

    mergeSortRecursive(arr, cmp, 0, arr.length - 1);
}

function mergeSortRecursive(arr, cmp, start, end) {
    if (start < end) {
        const mid = Math.floor((start + end) / 2);

        mergeSortRecursive(arr, cmp, start, mid);
        mergeSortRecursive(arr, cmp, mid + 1, end);

        mergeArrays(arr, cmp, start, mid, end);
    }
}

function mergeArrays(arr, cmp, start, mid, end) {
    const leftArray = [];
    const rightArray = [];

    // Consider using a single loop
    for (let i = start; i <= mid; i++) {
        leftArray.push(arr[i]);
    }

    for (let i = mid + 1; i <= end; i++) {
        rightArray.push(arr[i]);
    }

    const tempArray = [];
    let i = 0;
    let j = 0;
    while (tempArray.length !== (leftArray.length + rightArray.length)) {
        const leftValue = leftArray[i];
        const rightValue = rightArray[j];

        if (shouldInsertRightValue(cmp, leftValue, rightValue)) {
            tempArray.push(rightValue);
            j++;
        } else {
            tempArray.push(leftValue);
            i++;
        }
    }

    for (let i = start, j = 0; i <= end; i++, j++) {
        arr[i] = tempArray[j];
    }
}

function shouldInsertRightValue(cmp, leftValue, rightValue) {
    return typeof leftValue === "undefined"
        || (typeof rightValue !== "undefined" && cmp(rightValue, leftValue) < 0)
}

module.exports = mergeSort;