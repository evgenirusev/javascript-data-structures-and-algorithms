// https://leetcode.com/problems/longest-palindrome

function longestPalindrome(str) {
    if (str.length <= 1) {
        return str.length;
    }

    const charCounts = str.split('').reduce((map, char) => {
        if (!map[char])
            map[char] = 0;
        
        map[char]++;
        return map;
    }, {});
    
    let oddNumbersCount = 0;
    return (2 * Object.values(charCounts).reduce((sum, currentValue) => {
        if (currentValue % 2) {
            oddNumbersCount++;
        }

        if (currentValue != 1 && currentValue ) {
            sum += parseInt(currentValue / 2);
        }
        
        return sum;
    }, 0)) + (oddNumbersCount > 0 ? 1 : 0);
}

module.exports = longestPalindrome;
