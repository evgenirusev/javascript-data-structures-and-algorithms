var isValidSudoku = (board) => {
    const rowsSet = Array(board.length).fill().map(set => new Set());
    const colsSet = Array(board.length).fill().map(set => new Set());
    const boxesSet = Array(board.length).fill().map(set => new Set());
    
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board.length; col++) {
            const num = board[row][col];
            
            if (num == '.')
                continue;

            const boxIndex = (Math.floor(row / 3) * 3) + Math.floor(col / 3);
            if (rowsSet[row].has(num)
                || colsSet[col].has(num)
                || boxesSet[boxIndex].has(num))
                return false;

            rowsSet[row].add(num);
            colsSet[col].add(num);
            boxesSet[boxIndex].add(num);
        }
    }

    return true;
};

module.exports = isValidSudoku;