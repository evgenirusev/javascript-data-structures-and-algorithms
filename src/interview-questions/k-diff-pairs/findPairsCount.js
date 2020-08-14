// Given an array of integers and an integer k,
// you need to find the number of unique k-diff pairs in the array.

function findPairsCount(array, k) {
    let count = 0;
    let pairs = {};

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            const val1 = array[i];
            const val2 = array[j];

            if (i !== j 
                    && Math.abs(val1 - val2) === k 
                    && !pairs[`${val1}${val2}`] 
                    && !pairs[`${val2}${val1}`]) {
                count++;
                pairs[`${val1}${val2}`] = true;
            }
        }
    }

    return count;
}

module.exports = findPairsCount;
