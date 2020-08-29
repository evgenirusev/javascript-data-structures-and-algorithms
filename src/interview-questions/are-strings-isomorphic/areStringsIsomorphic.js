// Given two strings s and t, determine if they are isomorphic.
// Assume strings are of equal lengths

function areStringsIsomorphic(str1, str2) {
    const str1ToStr2Chars = {};
    const str2ToStr1Chars = {};

    for (let i = 0; i < str1.length; i++) {
        const char1 = str1.charAt(i);
        const char2 = str2.charAt(i);
        const isStr1CharMatch = typeof str1ToStr2Chars[char1] !== "undefined";
        const isStr2CharMatch = typeof str2ToStr1Chars[char2] !== "undefined";

        if (isStr1CharMatch || isStr2CharMatch) {
            if (isStr1CharMatch) {
                if (str1ToStr2Chars[char1] !== char2) {
                    return false;
                }
            } else {
                if (str2ToStr1Chars[char2] !== char1) {
                    return false;
                }
            }
        } else {
            str1ToStr2Chars[char1] = char2;
            str2ToStr1Chars[char2] = char1;
        }
    }

    return true;
}

module.exports = areStringsIsomorphic;
