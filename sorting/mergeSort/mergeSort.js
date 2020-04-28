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
    const leftToRightArrLength = (end - start) + 1;
    const auxArray = [];

    let leftCounter = start;
    let rightCounter = mid + 1;
    while (auxArray.length < leftToRightArrLength) {
        if (shouldPushLeft(arr, cmp, leftCounter, rightCounter, mid, end)) {
            auxArray.push(arr[leftCounter]);
            leftCounter++;
        } else {
            auxArray.push(arr[rightCounter]);
            rightCounter++;
        }
    }

    let auxArrayCounter = 0;
    for (let i = start; i <= end; i++) {
        arr[i] = auxArray[auxArrayCounter];
        auxArrayCounter++;
    }
}

function shouldPushLeft(arr, cmp, leftCounter, rightCounter, mid, end) {
    return rightCounter > end 
        || (leftCounter < mid + 1 && cmp(arr[leftCounter], arr[rightCounter]) < 0);
}

module.exports = mergeSort;