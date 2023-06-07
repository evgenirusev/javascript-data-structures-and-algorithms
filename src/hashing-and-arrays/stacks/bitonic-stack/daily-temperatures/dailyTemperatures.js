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