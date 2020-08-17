const operands = {
    "+": (a, b) => a + b,
    "-": (a, b) => b - a,
    "/": (a, b) => b / a,
    "*": (a, b) => a * b
}

function evaluateRPN(operations) {
    const stack = [];
    operations.forEach(token => {
        if (operands[token]) {
            stack.push(
                operands[token](
                    stack.pop(),
                    stack.pop()
                )
            );
        } else {
            stack.push(parseInt(token));
        }
    });

    return stack.pop();
}

module.exports = evaluateRPN;
