/**
 * https://leetcode.com/problems/container-with-most-water
 * Two pointer approach
 * Time complexity - O(n)
 * Space complexity - O(1)
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
    let maxVolume = 0;
    let l = 0, r = height.length - 1;
    while (l < r) {
        const volume = Math.min(height[r], height[l]) * (r - l);
        maxVolume = Math.max(volume, maxVolume);

        if (height[l] > height[r]) {
            r--;
        } else {
            l++;
        }
    }

    return maxVolume;
};

module.exports = maxArea;