const quickSelect = require("../../searching/quick-select/quickSelect.js");

// Find the kth largest element in an unsorted array. Note that it is the kth largest 
// element in the sorted order, not the kth distinct element.
function findKthLargestElement(array, k) {
    return quickSelect(array, array.length - (k - 1));
}

module.exports = findKthLargestElement
