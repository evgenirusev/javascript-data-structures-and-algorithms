function bucketSort(array, cmp) {
    if (typeof cmp !== "function") {
        cmp = (a, b) => a - b;
    }

    const buckets = parseIntoBuckets(array);
    sortBuckets(buckets, cmp);
    return mergeBucketsIntoArray(buckets, array);
}

function parseIntoBuckets(array) {
    const buckets = [];
    const maxElement = Math.max(...array);

    array.forEach(num => {
        const bucketIndex = Math.floor((array.length - 1) * num / maxElement);
        buckets[bucketIndex] = buckets[bucketIndex] || [];
        buckets[bucketIndex].push(num);
    });

    return buckets;
}

function sortBuckets(buckets, cmp) {
    buckets.forEach(bucket => {
        if (typeof bucket !== undefined) {
            insertionSort(bucket, cmp);
        }
    });
}

function insertionSort(arr, cmp) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j >= 0; j--) {
            if (cmp(arr[j], arr[j - 1]) > 0) {
                swap(arr, j, j - 1);
            }
        }
    }
}

function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function mergeBucketsIntoArray(buckets, array) {
    let index = 0;
    buckets.forEach(bucket => {
        bucket.forEach(num => {
            array[index] = num;
            index++;
        });
    });

    return array;
}

module.exports = bucketSort;