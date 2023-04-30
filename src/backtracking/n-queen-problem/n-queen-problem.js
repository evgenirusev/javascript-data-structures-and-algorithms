// https://leetcode.com/problems/n-queens/

// Possible solutions for n = 4
//   0 1 2 3
// 0 . Q . .
// 1 . . . Q
// 2 Q . . .
// 3 . . Q .

//   0 1 2 3
// 0 . . Q .
// 1 Q . . .
// 2 . . . Q
// 3 . Q . .

function nQueenProblem(n) {
    const result = [];
    const board = Array(n).fill().map(() => Array(n).fill('.'));
    placeQueen(board, 0, n, result, 0);
    return result;
}

function placeQueen(board, row, n, results) {
    if (row === n) {
        results.push(board.map(row => row.join('')));
        return;
    }

    for (let col = 0; col < n; col++) {
        if (canPlaceQueen(board, row, col, n)) {
            board[row][col] = 'Q';
            placeQueen(board, row + 1, n, results);
            board[row][col] = '.';
        }
    }
}

function canPlaceQueen(board, row, col, n) {
    const highestIndex = Math.max(row, n - row);

    for (let i = 1; i <= highestIndex; i++) {
        const topCell = board[row - i] && board[row - i][col];
        const bottomCell = board[row + i] && board[row + i][col];

        const topLeft = board[row - i] && board[row - i][col - i];
        const bottomRight = board[i + row] && board[i + row][col + i];
        const topRight = board[row - i] && board[row - i][col + i];
        const bottomLeft = board[row + 1] && board[row + 1][col - i];
    
        if (topCell == 'Q' || bottomCell == 'Q' || topLeft == 'Q' 
            || bottomRight == 'Q' || topRight == 'Q' || bottomLeft == 'Q')
            return false;
    }

    return true;
}

module.exports = nQueenProblem;