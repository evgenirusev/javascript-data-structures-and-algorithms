// https://leetcode.com/problems/add-strings

function addStrings(num1, num2) {
    const result = new Array(Math.max(num1.length, num2.length) + 1);

    let i = 1;
    let num1Digit = num1[num1.length - i];
    let num2Digit = num2[num2.length - i];
    let remainder = 0;
    while(num1Digit != null || num2Digit != null) {
        let digitSum = remainder;

        if (num1Digit != null)
            digitSum += parseInt(num1Digit);

        if (num2Digit != null)
            digitSum += parseInt(num2Digit);

        if (digitSum > 9) {
            result[result.length - i] = digitSum % 10;
            remainder = 1;
        } else {
            result[result.length - i] = digitSum;
        }

        i++;
        num1Digit = num1[num1.length - i];
        num2Digit = num2[num2.length - i];
    }
    
    return result.join('');
}

module.exports = addStrings;
