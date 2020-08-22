function findKthLargestElement(array, k) {
    return array.sort((a, b) => a - b)[array.length - k];
}

module.exports = findKthLargestElement
