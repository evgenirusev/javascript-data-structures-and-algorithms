/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const closingToOpening = {
        '}': '{',
        ')': '(',
        ']': '['
    };
    for (let c of s.split('')) {
        if (!closingToOpening[c]) {
            stack.push(c);
        } else {
            const lastChar = stack.pop();

            if (lastChar !== closingToOpening[c])
                return false;
        }
    };

    return stack.length === 0;
};

module.exports = isValid;