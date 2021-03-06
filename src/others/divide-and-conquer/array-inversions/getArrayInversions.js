function getArrayInversions(arr, cmp) {
    if (typeof cmp !== "function") {
        cmp = (a, b) => a - b;
    }

    return sortAndCountInversions(arr, cmp, 0, arr.length - 1);
}

function sortAndCountInversions(arr, cmp, left, right) {
    if (left >= right) {
        return 0;
    }

    const mid = Math.floor((left + right) / 2);

    const leftInvCount = sortAndCountInversions(arr, cmp, left, mid);
    const rightInvCount = sortAndCountInversions(arr, cmp, mid + 1, right);
    const splitInvCount = countSplitInvAndMerge(arr, cmp, left, mid, right);

    return leftInvCount + rightInvCount + splitInvCount;
}

function countSplitInvAndMerge(arr, cmp, start, mid, end) {
    const leftToRightArrLength = (end - start) + 1;
    const auxiliaryArray = [];

    let inversionsCount = 0;
    let leftCounter = start;
    let rightCounter = mid + 1;
    while (auxiliaryArray.length < leftToRightArrLength) {
        if (shouldPushLeft(arr, cmp, leftCounter, rightCounter, mid, end)) {
            auxiliaryArray.push(arr[leftCounter]);
            leftCounter++;
        } else {
            auxiliaryArray.push(arr[rightCounter]);
            inversionsCount += mid + 1 - leftCounter;
            rightCounter++;
        }
    }

    let auxArrayCounter = 0;
    for (let i = start; i <= end; i++) {
        arr[i] = auxiliaryArray[auxArrayCounter];
        auxArrayCounter++;
    }

    return inversionsCount;
}

function shouldPushLeft(arr, cmp, leftCounter, rightCounter, mid, end) {
    return rightCounter > end
        || (leftCounter < mid + 1 && cmp(arr[leftCounter], arr[rightCounter]) < 0);
}

module.exports = getArrayInversions;