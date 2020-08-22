function quickSelect(arr, orderStatistic) {
    if (orderStatistic > arr.length && orderStatistic < 0) {
        throw `invalid argument`;
    }

    return quickSelectRecursive(arr, 0, arr.length - 1, orderStatistic);
}

function quickSelectRecursive(arr, left, right, orderStatistic) {
    if (left >= right) {
        return arr[left];
    }

    const pivot = partition(arr, left, right);

    if (pivot + 1 === orderStatistic) {
        return arr[pivot];
    }

    if (pivot + 1 > orderStatistic) {
        return quickSelectRecursive(arr, left, pivot - 1, orderStatistic);
    } else {
        return quickSelectRecursive(arr, pivot + 1, right, orderStatistic);
    }
}

function partition(arr, left, right) {
    const pivot = arr[left];

    let i = left + 1;
    for (let j = i; j <= right; j++) {
        if (arr[j] < pivot) {
            if (j !== i) {
                swap(arr, i, j);
            }

            i++;
        }
    }

    swap(arr, left, i - 1);
    return i - 1;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

module.exports = quickSelect;