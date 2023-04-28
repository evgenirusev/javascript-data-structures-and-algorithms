https://leetcode.com/problems/n-queens/

function nQueenProblem(n) {
    const boards = new Array(n).fill([]);

    for (let row = 0; row < n; row++) {
        backtrack(row + 1, n, boards[0]);
    }

    return boards;
}

function backtrack(row, n, board) {
    for (let col = 0; col < n; col++) {
        if (canPlaceQueen(row, col, board, n)) {
            board[row][col] = 'Q';
            backtrack(row + 1, n, board);
        }
    }
}

function canPlaceQueen(row, col, board, n) {
    const highestIndex = Math.max(n, n - row);

    for (let i = 1; i < highestIndex; i++) {
        const topLeft = board[row - i][col - i];
        const bottomRight = board[i + row][col + i];
        const topRight = board[row - i][col + i];
        const bottomLeft = board[row + 1][col - i];

        if (topLeft == 'Q' || bottomRight == 'Q' 
        || topRight == 'Q' || bottomLeft == 'Q') {
            return false;
        }
    }

    return true;
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
  