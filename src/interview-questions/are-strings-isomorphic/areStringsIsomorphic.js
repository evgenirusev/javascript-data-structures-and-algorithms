// Given two strings s and t, determine if they are isomorphic.
// Assume strings are of equal lengths

function areStringsIsomorphic(str1, str2) {
    let charsMap = {};

    str1.split("")
        .forEach((c, i) => {
            if (typeof charsMap[c] === "undefined") {
                charsMap[c] = str2.charAt(i);
            } else {
                if (charsMap[c] !== str2.charAt(i)) {
                    return false;
                }
            }
        });

    return true;
}

module.exports = areStringsIsomorphic;
