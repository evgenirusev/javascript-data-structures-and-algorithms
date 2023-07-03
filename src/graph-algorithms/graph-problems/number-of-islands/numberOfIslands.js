/**
 * https://leetcode.com/problems/number-of-islands
 * Time complexity - O(N * M)
 * Space complexity - O(N * M)
 * @param {character[][]} grid
 * @return {number}
 */
function numberOfIslands(grid) {
  if (grid === null || grid.length === 0)
    return 0;

  let count = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === "1") {
        count++;
        dfs(grid, row, col);
      }
    }
  }

  return count;
}

function dfs(grid, row, col) {
  const rows = grid.length;
  const cols = grid[0].length;

  if (row < 0 || col < 0 || row >= rows || col >= cols 
  || grid[row][col] === "0")
    return;

  grid[row][col] = "0";

  dfs(grid, row + 1, col);
  dfs(grid, row - 1, col);
  dfs(grid, row, col + 1);
  dfs(grid, row, col - 1);
}

module.exports = numberOfIslands;
