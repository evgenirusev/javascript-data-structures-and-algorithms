function searchMatrix(matrix, target) {
    const targetArray = searchForTargetRow(matrix, target);

    if (!targetArray)
        return false;

    return binarySearchIterative(targetArray, target) !== -1;
}

function searchForTargetRow(matrix, target) {
    let left = 0;
    let right = matrix.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (target >= matrix[mid][0] && target <= matrix[mid][matrix[mid].length - 1]) {
            return matrix[mid];
        } else if (target < matrix[mid][0]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return null;
}

function binarySearchIterative(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

module.exports = searchMatrix;