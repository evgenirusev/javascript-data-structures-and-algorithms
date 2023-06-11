/**
 * https://leetcode.com/problems/longest-repeating-character-replacement
 * Sliding window approach
 * Time complexity - O(N)
 * Space complexity - O(1)
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(s, k) {
    const uppercaseLetters = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
    const letterOccurrences = {};
    uppercaseLetters.forEach(letter => {
        letterOccurrences[letter] = 0;
    });
    let globalMax = 0;
    let maxCount = 0;
    let L = 0;
    for (let R = 0; R < s.length; R++) {
        const char = s.charAt(R);
        letterOccurrences[char] += 1;
        maxCount = Math.max(maxCount, letterOccurrences[char]);

        if (R - L + 1 - maxCount > k) {
            letterOccurrences[s.charAt(L)] -= 1;
            L++;
        }

        globalMax = Math.max(globalMax, R - L + 1);
    }

    return globalMax;
};

module.exports = characterReplacement;