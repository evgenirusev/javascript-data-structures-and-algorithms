function mergeSort(arr, cmp) {
    if (typeof cmp !== "function") {
        cmp = (a, b) => a - b;
    }

    mergeSortRecursive(arr, cmp, 0, arr.length - 1);
    return arr;
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

    for (let i = start; i <= end; i++) {
        if (i <= mid) {
            leftArray.push(arr[i]);
        } else {
            rightArray.push(arr[i]);
        }
    }

    const tempArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (tempArray.length !== (leftArray.length + rightArray.length)) {
        const leftValue = leftArray[leftIndex];
        const rightValue = rightArray[rightIndex];

        if (shouldInsertRightValue(cmp, leftValue, rightValue)) {
            tempArray.push(rightValue);
            rightIndex++;
        } else {
            tempArray.push(leftValue);
            leftIndex++;
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