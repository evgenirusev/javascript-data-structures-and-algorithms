function shellSort(array, cmp) {
    if (typeof cmp !== "function") {
        cmp = (a, b) => a - b;
    }

    for (let interval = array.length / 2; interval > 0; interval /= 2) {
        for (let right = interval; right < array.length; right++) {
            let left = right - interval;
            if (left < interval && array[right] < array[left]) {
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

let arr = [9, 8, 3, 7, 5, 6, 4, 1];

shellSort(arr);

arr.forEach(x => {
    console.log(x);
});
