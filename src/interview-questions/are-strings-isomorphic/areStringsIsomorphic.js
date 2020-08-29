// Given two strings s and t, determine if they are isomorphic.
// Assume strings are of equal lengths

function areStringsIsomorphic(str1, str2) {
    const charsMap = {};

    for (let i = 0; i < str1.length; i++) {
        const char1 = str1.charAt(i);
        const char2 = str2.charAt(i);

        if (typeof charsMap[char1] === "undefined") {
            charsMap[char1] = char2;
        } else {
            if (charsMap[char1] !== char2) {
                return false;
            }
        }
    }

    return true;
}

module.exports = areStringsIsomorphic;
