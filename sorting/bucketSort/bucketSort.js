function bucketSort(arr, cmp) {
    if (typeof cmp !== "function") {
        cmp = (a, b) => a - b;
    }

    const buckets = parseIntoBuckets(arr);
    sortBuckets(buckets);
    return mergeBuckets(buckets);
}

module.exports = bucketSort;