function combine(n, k) {
    function backtrack(curr, firstNum) {
        if (curr.length === k) {
            res.push([...curr]);
            return;
        }

        const need = k - curr.length;
        const remain = n - firstNum + 1;
        const available = remain - need;
        
        for (let num = firstNum; num <= firstNum + available; num++) {
            curr.push(num);
            backtrack(curr, num + 1);
            curr.pop();
        }
    }

    const res = [];
    backtrack([], 1);
    return res;
}

module.exports = combine;