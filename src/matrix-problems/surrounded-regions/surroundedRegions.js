/**
 * DFS - single pass approach
 * Time complexity - O(ROW * COL)
 * Space complexity - O(ROW * COL)
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var surroundedRegions = function(board) {
    const rows = board.length;
    const cols = board[0].length;

    const visited = new Set();
    for (let row = 1; row < rows - 1; row++) {
        for (let col = 1; col < cols - 1; col++) {
            if (board[row][col] === "O") {
                const currentVisited = new Set();
                if (canBeCaptured(currentVisited, board, row, col, rows, cols)) {
                    currentVisited.forEach(cell => {
                        const [r, c] = cell.split(',');
                        board[parseInt(r)][parseInt(c)] = "X";
                    });
                } else {
                    for (const cell of currentVisited) {
                        visited.add(cell);
                    }
                }
            }
        }
    }
};

function canBeCaptured(cellsForCapture, board, row, col, rows, cols) {
    if (row <= 0 || col <= 0 || row >= rows - 1 || col >= cols - 1)
        return false;

    cellsForCapture.add(`${row},${col}`);

    for (const [r, c] of getNeighbors(row, col)) {
        if (!cellsForCapture.has(`${r},${c}`) && board[r][c] == "O") {
            if (!canBeCaptured(cellsForCapture, board, r, c, rows, cols)) {
                return false;
            }
        }
    }

    return true;
}

function getNeighbors(row, col) {
    return [[0, 1], [0, -1], [1, 0], [-1, 0]].map(cell => [row + cell[0], col + cell[1]]);
}

module.exports = surroundedRegions;