/**
 * @param {string} s
 * @return {boolean}
 * Time complexity - O(N)
 * Space complexity - O(1)
 */
function checkValidString(s) {
    let leftMin = 0;
    let leftMax = 0;

    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === "(") {
            leftMin++;
            leftMax++;
        } else if (c === ")") {
            leftMin--;
            leftMax--;
        } else {
            leftMin--;
            leftMax++;
        }

        if (leftMax < 0) {
            return false;
        }

        if (leftMin < 0) {
            leftMin = 0;
        }
    }

    return leftMin === 0;
}

module.exports = checkValidString;