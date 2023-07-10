/**
 * Approaches - BFS & DFS
 * Time complexity - O(Row * Col)
 * Space complexity - O(Row * Col) 
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                maxArea = Math.max(maxArea, getIslandAreaDFS(grid, row, col, grid.length, grid[0].length));
            }
        }
    }

    return maxArea;
};

function getIslandAreaDFS(grid, row, col, rows, cols) {
    let count = 1;
    grid[row][col] = 0;

    if (row - 1 >= 0 && grid[row - 1][col] == 1)
        count += getIslandAreaDFS(grid, row - 1, col, rows, cols);
    
    if (row + 1 < rows && grid[row + 1][col] == 1)
        count += getIslandAreaDFS(grid, row + 1, col, rows, cols);
    
    if (col - 1 >= 0 && grid[row][col - 1] == 1)
        count += getIslandAreaDFS(grid, row, col - 1, rows, cols);

    if (col + 1 < cols && grid[row][col + 1] == 1)
        count += getIslandAreaDFS(grid, row, col + 1, rows, cols);

    return count;
}

// BFS solution
// function getIslandAreaBFS(grid, row, col) {
//     const highestRow = grid.length - 1;
//     const highestCol = grid[0].length - 1;
//     let area = 0;

//     const queue = new Queue();
//     queue.enqueue([row, col]);
//     grid[row][col] = 0;

//     while (!queue.isEmpty) {
//         const cell = queue.dequeue();
//         const r = cell[0];
//         const c = cell[1];
//         area++;

//         if (r - 1 >= 0 && grid[r - 1][c] == 1) {
//             queue.enqueue([r - 1, c]);
//             grid[r - 1][c] = 0;
//         }

//         if (r + 1 <= highestRow && grid[r + 1][c] == 1) {
//             queue.enqueue([r + 1, c]);
//             grid[r + 1][c] = 0;
//         }
            
//         if (c - 1 >= 0 && grid[r][c - 1] == 1) {
//             queue.enqueue([r, c - 1]);
//             grid[r][c - 1] = 0;
//         }
            
//         if (c + 1 <= highestCol && grid[r][c + 1] == 1) {
//             queue.enqueue([r, c + 1]);
//             grid[r][c + 1] = 0;
//         }
//     }

//     return area;
// }

module.exports = maxAreaOfIsland;