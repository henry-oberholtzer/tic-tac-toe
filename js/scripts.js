// Business Logic

function WinConditionBoard(row1, row2, row3, col1, col2, col3, diag1, diag2) {
    this.row1 = row1;
    this.row2 = row2;
    this.row3 = row3;
    this.col1 = col1;
    this.col2 = col2;
    this.col3 = col3;
    this.diag1 = diag1;
    this.diag2 = diag2;
}

const newGame = new WinConditionBoard([null, null, null], [null, null, null], [null, null, null], [null, null, null], [null, null, null], [null, null, null], [null, null, null], [null, null, null]);