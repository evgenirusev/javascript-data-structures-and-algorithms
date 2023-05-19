// https://leetcode.com/problems/contains-duplicate-ii/description/

function containsNearbyDuplicate(arr, k) {
    if (k === 0)
        return false;
    
    const set = new Set();
    let L = 0;
    set.add(arr[L]);
    for (let i = 1; i < arr.length; i++) {
        if (set.has(arr[i]))
            return true;
    
        set.add(arr[i]);
    
        if (set.size > k) {
            set.delete(arr[L]);
            L++;
        }
    }

    return false;
}

module.exports = containsNearbyDuplicate;