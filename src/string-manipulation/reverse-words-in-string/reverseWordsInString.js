function reverseWordsInString(str) {
    return str.split(/\s+/)
            .reverse()
            .join(" ")
            .trim();
}

module.exports = reverseWordsInString;
