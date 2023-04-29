// https://leetcode.com/problems/n-queens/

function nQueenProblem(n) {
    
    const boards = Array(n).fill().map(() => Array(n).fill('.'));

    for (let row = 0; row < n; row++) {
        placeQueenOnRow(row, n, boards);
    }

    return boards;
}

function placeQueenOnRow(row, n, boards) {
    if (row >= n)
        return;

    for (let col = 0; col < n; col++) {
        if (canPlaceQueen(row, col, boards, n)) {
            boards[row][col] = 'Q';
            placeQueenOnRow(row + 1, n, boards);
        }
    }
}

function canPlaceQueen(row, col, boards, n) {
    const highestIndex = Math.max(row, n - row);

    for (let i = 1; i < highestIndex; i++) {
        const topLeft = boards[row - i][col - i];
        const bottomRight = boards[i + row][col + i];
        const topRight = boards[row - i][col + i];
        const bottomLeft = boards[row + 1][col - i];

        if (topLeft == 'Q' || bottomRight == 'Q' 
        || topRight == 'Q' || bottomLeft == 'Q')
            return false;
    }

    return true;
}

module.exports = nQueenProblem;