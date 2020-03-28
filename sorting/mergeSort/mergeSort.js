function mergeSort(arr) {
    mergeSortRecursive(arr, 0, arr.length - 1);
}

function mergeSortRecursive(arr, start, end) {
    if (start < end) {
        const mid = Math.floor((start + end) / 2);

        mergeSortRecursive(arr, start, mid);
        mergeSortRecursive(arr, mid + 1, end);

        merge(arr, start, mid, end);
    }
}

function merge(arr, start, mid, end) {
    const leftArray = [];
    const rightArray = [];

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

        if (typeof leftValue === "undefined" || (typeof rightValue !== "undefined" && rightValue < leftValue)) {
            tempArray.push(rightValue);
            j++;
        } else {
            tempArray.push(leftValue);
            i++;
        }
    }

    for(let i = start, j = 0; i <= end; i++, j++) {
        arr[i] = tempArray[j];
    }
}

module.exports = mergeSort;