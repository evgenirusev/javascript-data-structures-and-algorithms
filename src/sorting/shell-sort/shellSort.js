function shellSort(array, cmp) {
    if (typeof cmp !== "function") {
        cmp = (a, b) => a - b;
    }

    let n = array.length / 2;
    let innerLoopEnd = array.length % 2 === 0 ? array.length : array.length - 1;
    for (let interval = n; interval > 0; interval /= 2) {
        for (let right = interval; right < innerLoopEnd; right++) {
            let left = right - interval;

            if (array[right] < array[left]) {
                swap(array, left, right);
            }
        }
    }
}

function swap(array, left, right) {
    const temp = array[left];

    array[left] = array[right];
    array[right] = temp;
}

module.exports = shellSort;
