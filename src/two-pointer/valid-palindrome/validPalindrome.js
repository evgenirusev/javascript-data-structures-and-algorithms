// https://leetcode.com/problems/valid-palindrome/
// Two pointer implementation - O(n) time and O(1) space
var isPalindrome = function(s) {
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        while (i < j && !isValidChar(s.charAt(i))) {
            i++;
        }

        while (i < j && !isValidChar(s.charAt(j))) {
            j--;
        }

        if (s.toLowerCase().charAt(i) != s.toLowerCase().charAt(j))
            return false;
    }

    return true;
};

function isValidChar(c) {
    const charCode = c.toLowerCase().charCodeAt();
    return (charCode >= 'a'.charCodeAt()
        && charCode <= 'z'.charCodeAt()) 
        || (charCode >= '0'.charCodeAt()
           && charCode <= '9'.charCodeAt());
}

module.exports = isPalindrome;