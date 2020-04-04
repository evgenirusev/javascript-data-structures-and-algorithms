function bucketSort(arr, cmp) {
    if (typeof cmp !== "function") {
        cmp = (a, b) => a - b;
    }

    const buckets = parseIntoBuckets(arr);
    sortBuckets(buckets);
    return mergeBuckets(buckets);
}

function parseIntoBuckets(array) {
    const buckets = [];

    array.forEach(num => {
        const bucketIndex = Math.floor((arr.length - 1) * num / Math.max(...array));
        buckets[bucketIndex].push(num);
    });

    return buckets;
}

module.exports = bucketSort;