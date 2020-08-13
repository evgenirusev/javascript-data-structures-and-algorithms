function reverseWordsInString(str) {
    return str
            .split(/\s+/)
            .reverse()
            .join(" ");
}

module.exports = reverseWordsInString;
