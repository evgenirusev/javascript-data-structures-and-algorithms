// Given an input string (s) and a pattern (p), implement wildcard pattern 
// matching with support for '?' and '*'.

function getNextStrIndexIfMatchSingleChar(str, pattern, strIndex, patternIndex) {
    return typeof str.charAt(strIndex) === "" ? -1 : 1;
}

function getNextStrIndexIfMatchSegment(str, pattern, strIndex, patternIndex) {
    const nextChar = pattern.charAt(patternIndex + 1);

    if (nextChar === "") {
        return str.length;
    }

    let currentStrIndex = strIndex;
    while (str.charAt(currentStrIndex) !== "") {
        if (str.charAt(currentStrIndex) === nextChar) {
            return currentStrIndex;
        }

        currentStrIndex++;
    }

    return -1;
}

const strategiesMap = {
    "?": getNextStrIndexIfMatchSingleChar,
    "*": getNextStrIndexIfMatchSegment,
}

function isMatch(str, pattern) {
    let strIndex = 0;
    for (let patternIndex = 0; patternIndex < pattern.length; patternIndex++) {
        const patternChar = pattern.charAt(patternIndex);

        if (strategiesMap[patternChar]) {
            const nextStrIndex = strategiesMap[patternChar](str, pattern, strIndex, patternIndex);

            if (nextStrIndex === -1) {
                return false;
            } else {
                strIndex = nextStrIndex;
            }
        } else {
            if (patternChar !== str.charAt(strIndex)) {
                return false;
            }

            strIndex++;
        }
    }

    return strIndex < str.length ? false : true;
}

module.exports = isMatch;
