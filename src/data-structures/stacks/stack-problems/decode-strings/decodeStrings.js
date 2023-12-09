/**
 * @param {string} s
 * @return {string}
 */
function decodeStrings(s) {
    const stack = [];

    for (let char of s) {
        if (char !== "]") {
            stack.push(char);
        } else {
            let subStr = "";
            while (stack[stack.length - 1] !== "[") {
                subStr = stack.pop() + subStr;
            }
            stack.pop();

            let multiplier = "";
            while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
                multiplier = stack.pop() + multiplier;
            }

            stack.push(subStr.repeat(Number(multiplier)));
        }
    }

    return stack.join("");
}

module.exports = decodeStrings;