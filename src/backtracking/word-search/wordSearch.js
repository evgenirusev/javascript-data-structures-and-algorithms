var exist = function(board, word) {
    const neighbors = [
        [0, -1],
        [-1, 0],
        [0, 1],
        [1, 0],
    ];

    function isValidCell(r, c, b) {
        return r >= 0 && r < b.length && c >= 0 && c < b[0].length;
    }

    function dfs(row, col, nextCharIndex) {
        if (row >= board.length || row < 0 || col >= board[0].length || col < 0)
            return false;

        if (board[row][col] != word.charAt(nextCharIndex))
            return false;

        if (nextCharIndex === word.length - 1)
            return true;

        const temp = board[row][col];
        board[row][col] = ' ';

        for (let i = 0; i < neighbors.length; i++) {
            const adjRow = row + neighbors[i][0];
            const adjCol = col + neighbors[i][1];
            if (isValidCell(adjRow, adjCol, board) && dfs(adjRow, adjCol, nextCharIndex + 1))
                return true;
        }

        board[row][col] = temp;

        return false;
    }

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] === word.charAt(0) && dfs(row, col, 0))
                return true;
        }
    }

    return false;
};

module.exports = exist;