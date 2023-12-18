function letterCombinations(digits) {
    if (digits == '')
        return [];
        
    const combinations = [];
    const letters = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };

    function dfs(currentCombo, digitIndex) {
        if (currentCombo.length == digits.length) {
            combinations.push(currentCombo.join(''));
            return;
        }

        let lett = letters[digits[digitIndex]];
        for (let i = 0; i < lett.length; i++) {
            currentCombo.push(lett.charAt(i));
            dfs(currentCombo, digitIndex + 1);
            currentCombo.pop();
        }
    }

    dfs([], 0);
    
    return combinations;
}

module.exports = letterCombinations;