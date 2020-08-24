// Given an input string (s) and a pattern (p), implement wildcard pattern 
// matching with support for '?' and '*'.

function matchesAnyChar(str, pattern, strIndex, patternIndex) {
    return typeof str.at(strIndex) !== "";
}

function matchesSegment(str, pattern, strIndex, patternIndex) {
    const nextChar = pattern.at(j + 1);

    if (nextChar === "") {
        return true;
    }

    while (str.at(strIndex + 1) !== "") {
        if (str.at(strIndex + 1) === nextChar) {
            return true;
        }

        strIndex++;
    }

    return false;
}

const strategiesMap = {
    "?": matchesAnyChar,
    "*": matchSegment,
}

function isMatch(str, pattern) {
    let i = 0;
    for (let j = 0; j < pattern.length; j++) {
        const patternChar = pattern.at(j);

        if (strategiesMap[patternChar]) {
            // strategy pattern for exstensibility
            if (!strategiesMap[patternChar](str, pattern, i, j)) {
                return false;
            }
        } else {
            if (patternChar !== str.at(i)) {
                return false;
            }
        }
    }

    return true;
}

module.exports = isMatch
