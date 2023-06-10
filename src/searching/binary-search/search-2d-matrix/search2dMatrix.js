/**
 * https://leetcode.com/problems/search-a-2d-matrix/
 * 
 * Solution - double binary search - easiest for interviews.
 * Time complexity - log(n*m)
 * Time complexity - O(1)
 * 
 * Alternative solution is further down
 * 
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
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

/**
 * This is the alternative approach and it's shorter, but a bit hard to come up with the formula
 * during an interview. The essense of it is running a single binary search by converting
 * the indices with the following formulas:
 *      pivotIdx = Math.floor((left + right) / 2);
 *      pivotElement = matrix[Math.floor(pivotIdx / n)][pivotIdx % n];
*/
function searchMatrixSingleBinarySearch(matrix, target) {
    let m = matrix.length;
    if (m === 0) {
      return false;
    }
    let n = matrix[0].length;
  
    // binary search
    let left = 0, right = m * n - 1;
    let pivotIdx, pivotElement;
    while (left <= right) {
        pivotIdx = Math.floor((left + right) / 2);
        pivotElement = matrix[Math.floor(pivotIdx / n)][pivotIdx % n];
        if (target === pivotElement) {
            return true;
        } else {
            if (target < pivotElement) {
                right = pivotIdx - 1;
            } else {
                left = pivotIdx + 1;
            }
        }
    }
    return false;
}

module.exports = searchMatrix;