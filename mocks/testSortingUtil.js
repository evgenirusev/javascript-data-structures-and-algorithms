function testSortingUtil(sortingCallback, array, cmp) {
    if (typeof cmp !== "function") {
        cmp = (a, b) => a - b;
    }

    return sortingCallback(array, cmp).toString() === array.sort(cmp).toString();
}

module.exports = testSortingUtil;