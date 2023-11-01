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

function moveInput(newGame, index, player) {
    const game = newGame
    const gridMap = {
        0: [game.row1[0], game.col1[0], game.diag1[0]],
        1: [game.row1[1], game.col2[0]],
        2: [game.row1[2], game.col3[0], game.diag2[0]],
        3: [game.row2[0], game.col1[1]],
        4: [game.row2[1], game.col2[1], game.diag1[1], game.diag2[1]],
        5: [game.row2[2], game.col3[1]],
        6: [game.row3[0], game.col1[2], game.diag2[2]],
        7: [game.row3[1], game.col2[2]],
        8: [game.row3[2], game.col3[2], game.diag1[2]],
    };
    console.log(gridMap);
    gridMap[index].forEach((spot) => {
        spot.value = player;
    });
    console.log(game)
    console.log(gridMap[index]);
}