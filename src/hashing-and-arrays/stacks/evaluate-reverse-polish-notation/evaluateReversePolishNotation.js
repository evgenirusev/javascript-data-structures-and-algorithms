/**
 * @param {string[]} tokens
 * @return {number}
 * https://leetcode.com/problems/evaluate-reverse-polish-notation
 */
const OPERATORS = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "/": (a, b) => a / b,
    "*": (a, b) => a * b,
  };
const evalRPN = (tokens) => {
    const symbols = new Set(["+", "-", "*", "/"]);
    const stack = [];
    tokens.forEach((token) => {
        if (symbols.has(token)) {
            const firstNum = stack.pop();
            const result = stack.pop();
            const operation = OPERATORS[token];
            const computedResult = operation(result, firstNum);
            stack.push(parseInt(computedResult));
        } else {
            stack.push(parseInt(token));
        }
    });
  
    return stack.pop();
};
module.exports = evalRPN;
