function reverseWordsInString(str) {
    // return str
            // .split(/\s+/)
            // .reverse()
            // .join(" ");

    let result = "";
    let currentWord = "";
    for (let i = str.length - 1; i >= 0; i--) {
        const currentChar = str.charAt(i);

        if (currentChar !== " ") {
            currentWord = currentChar + currentWord;
        } else {
            if (currentWord !== "") {
                result += `${currentWord} `;
                currentWord = "";
            }
        }
    }

    return result.slice(0, -1);
}

module.exports = reverseWordsInString;
