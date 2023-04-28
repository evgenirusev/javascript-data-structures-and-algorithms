https://leetcode.com/problems/n-queens/

function nQueenProblem(n) {
    const boards = new Array(n).fill([]);

    for (let row = 0; row < n; row++) {
        placeQueenOnRow(row, n, boards[row]);
    }

    return boards;
}

function placeQueenOnRow(row, n, board) {
    for (let col = 0; col < n; col++) {
        if (canPlaceQueen(row, col, board, n)) {
            board[row][col] = 'Q';
            placeQueenOnRow(row + 1, n, board);
        }
    }
}

function canPlaceQueen(row, col, board, n) {
    const highestIndex = Math.max(row, n - row);

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
  