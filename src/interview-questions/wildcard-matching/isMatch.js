// Given an input string (s) and a pattern (p), implement wildcard pattern 
// matching with support for '?' and '*'.

function getNextStrIndexIfMatchSingleChar(str, pattern, strIndex, patternIndex) {
    return typeof str.at(strIndex) === "" ? -1 : 1;
}

function getNextStrIndexIfMatchSegment(str, pattern, strIndex, patternIndex) {
    const nextChar = pattern.at(j + 1);

    if (nextChar === "") {
        return str.length;
    }

    let currentStrIndex = strIndex + 1;
    while (str.at(currentStrIndex) !== "") {
        if (str.at(currentStrIndex) === nextChar) {
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
    for (let j = 0; j < pattern.length; j++) {
        const patternChar = pattern.at(j);

        if (strategiesMap[patternChar]) {
            const nextStrIndex = strategiesMap[patternChar];

            if (nextStrIndex === -1) {
                return false;
            } else {
                strIndex = nextStrIndex;
            }
        } else {
            if (patternChar !== str.at(i)) {
                return false;
            }

            strIndex++;
        }
    }

    return true;
}

module.exports = isMatch;
