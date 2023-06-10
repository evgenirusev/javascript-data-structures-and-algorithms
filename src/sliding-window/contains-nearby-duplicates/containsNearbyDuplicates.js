// https://leetcode.com/problems/contains-duplicate-ii/description/

// Sliding window approach - O(n) time, O(k) space
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

// Brute force - O(n*k) time and O(k) space

module.exports = containsNearbyDuplicate;