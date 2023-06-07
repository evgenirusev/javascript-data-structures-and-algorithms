/**
 * Time complexity - O(n)
 * Space complexity - O(1) (excluding the output array)
 * https://leetcode.com/problems/daily-temperatures/
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temperatures) {
    const answer = new Array(temperatures.length).fill(0);
    const stack = [];
  
    for (let i = 0; i < temperatures.length; i++) {
      const t = temperatures[i];
  
      while (stack.length > 0 && temperatures[stack[stack.length - 1]] < t) {
        const prevDay = stack.pop();
        answer[prevDay] = i - prevDay;
      }
  
      stack.push(i);
    }
  
    return answer;
}

module.exports = dailyTemperatures;