/**
 * @param {number[]} prices
 * @return {number}
 *
 */
function maxProfit(prices) {
    const MP = new Array(prices.length + 2).fill(0);
  
    for (let i = prices.length - 1; i >= 0; i--) {
        let C1 = 0;
      
        for (let sell = i + 1; sell < prices.length; sell++) {
            const profit = prices[sell] - prices[i] + MP[sell + 2];
            C1 = Math.max(profit, C1);
        }
  
        const C2 = MP[i + 1];
        MP[i] = Math.max(C1, C2);
    }
    
    return MP[0];
  }

// Inefficient solution with caching
// var maxProfit = function(prices) {
//     const cache = {};
    
//     if (prices.length <= 1)
//         return 0;

//     function dfs(i, cd, buyIndex) {
//         if (i >= prices.length)
//             return 0;

//         const key = `${i}${cd}${buyIndex}`;
//         if (cache[key] != null) {
//             return cache[key];
//         }

//         let result = 0;
//         if (cd) {
//             result = dfs(i + 1, false, buyIndex);
//         } else if (buyIndex >= 0) {
//             let profit = prices[i] - prices[buyIndex];

//             if (profit > 0) {
//                 result = Math.max(
//                     profit + dfs(i + 1, true, -1),
//                     dfs(i + 1, false, buyIndex)
//                 )
//             } else {
//                 result = dfs(i + 1, true, -1);
//             }
//         } else {
//             result = Math.max(
//                 dfs(i + 1, false, -1),
//                 dfs(i + 1, false, i)
//             );
//         }

//         cache[key] = result;
//         return cache[key];
//     }

//     return Math.max(
//         dfs(1, false, 0),
//         dfs(1, false, -1)
//     );
// };

// Brute force
// var maxProfit = function(prices) {
//     if (prices.length <= 1)
//         return 0;

//     function dfs(i, cd, buyIndex) {
//         if (i >= prices.length)
//             return 0;

//         if (cd) {
//             return dfs(i + 1, false, buyIndex);
//         } else if (buyIndex >= 0) {
//             let profit = prices[i] - prices[buyIndex];
            
//             return profit > 0
//                 ? profit + dfs(i + 1, true, -1)
//                 : dfs(i + 1, true, -1);
//         } else {
//             return Math.max(
//                 dfs(i + 1, false, -1),
//                 dfs(i + 1, false, i)
//             );
//         }
//     }

//     return Math.max(
//         dfs(1, false, 0),
//         dfs(1, false, false)
//     );
// };

module.exports = maxProfit;