https://leetcode.com/problems/n-queens/

function nQueenProblem(n) {
    const boards = new Array(n).fill([]);

    for (let row = 0; row < n; row++) {
        recurse(row + 1, n, boards[0]);
    }

    return boards;
}

function recurse(row, n, board) {
    for (let col = 0; col < n; col++) {
        if (canPlaceQueen(row, col, board, n)) {

        }
    }
}

function canPlaceQueen(row, col, board, n) {
    const highestIndex = Math.max(n, n - row);

    for (let i = 1; i < highestIndex; i++) {
        if (board[i + row][col + i] != '.') {

        }
    }
}

// 33:

// 00
// 11
// 22

// 24
// 15
// 06

// 44
// 55
// 66

// 42
// 51
// 60

module.exports = nQueenProblem;
  