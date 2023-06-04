const evalRPN = require('./evalRPN');

describe('evalRPN', () => {
  it('should evaluate the reverse Polish notation expression correctly', () => {
    const tokens = ['2', '1', '+', '3', '*'];
    expect(evalRPN(tokens)).toBe(9);
  });

  it('should handle negative numbers', () => {
    const tokens = ['4', '13', '5', '/', '+'];
    expect(evalRPN(tokens)).toBe(6);
  });

  it('should handle decimal numbers', () => {
    const tokens = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'];
    expect(evalRPN(tokens)).toBe(22);
  });

  it('should handle division with negative numbers', () => {
    const tokens = ['-78', '-33', '/', '33', '3', '/', '+'];
    expect(evalRPN(tokens)).toBe(11);
  });
});
