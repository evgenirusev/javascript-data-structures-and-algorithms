const Queue = require("../../../data-structures/queues/with-object-and-pointers/Queue");

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                maxArea = Math.max(maxArea, getIslandArea(grid, row, col));
            }
        }
    }

    return maxArea;
};

function getIslandArea(grid, row, col) {
    const highestRow = grid.length - 1;
    const highestCol = grid[0].length - 1;
    let area = 0;

    const queue = new Queue();
    queue.enqueue([row, col]);
    grid[row][col] = 0;

    while (!queue.isEmpty) {
        const cell = queue.dequeue();
        const r = cell[0];
        const c = cell[1];
        area++;

        if (r - 1 >= 0 && grid[r - 1][c] == 1) {
            queue.enqueue([r - 1, c]);
            grid[r - 1][c] = 0;
        }

        if (r + 1 <= highestRow && grid[r + 1][c] == 1) {
            queue.enqueue([r + 1, c]);
            grid[r + 1][c] = 0;
        }
            
        if (c - 1 >= 0 && grid[r][c - 1] == 1) {
            queue.enqueue([r, c - 1]);
            grid[r][c - 1] = 0;
        }
            
        if (c + 1 <= highestCol && grid[r][c + 1] == 1) {
            queue.enqueue([r, c + 1]);
            grid[r][c + 1] = 0;
        }
    }

    return area;
}

module.exports = maxAreaOfIsland;