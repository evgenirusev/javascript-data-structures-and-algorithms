// https://leetcode.com/problems/add-strings
function addStrings(num1, num2) {
    const result = new Array(Math.max(num1.length, num2.length) + 1);

    let i = num1.length - 1;
    let j = num2.length - 1;
    let remainder = 0;
    for (let k = result.length - 1; k >= 0; k--, i--, j--) {
        const sum = ((parseInt(num1[i]) || 0) + (parseInt(num2[j]) || 0)) + remainder;
        
        remainder = sum > 9 ? 1 : 0;
        
        result[k] = 0;
        if (sum)
            result[k] += sum % 10;
    }
    
    if (!result[0])
        delete result[0];
    
    return result.join('');
}

module.exports = addStrings;
