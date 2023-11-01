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

WinConditionBoard.prototype.winCheck = function() {
    const keyArray = Object.keys(this);
    for (let i = 0; i < keyArray.length; i++) {
        const key = keyArray[i];
        const targetKey = this[key];
        if (targetKey.every((value) => {
            return value === "X";
        })) {
            return "Xwin";
        } else if (targetKey.every((value) => {
            return value === "O";
        })) {
            return "Owin";
        } 
    }
}

function moveInput(game, index, player) {
    const playTurn = game;
    const gridMap = {
        0: [["row1", 0], ["col1", 0], ["diag1", 0]],
        1: [["row1", 1],["col2", 0]],
        2: [["row1", 2], ["col3", 0], ["diag2", 0]],
        3: [["row2", 0], ["col1", 1]],
        4: [["row2", 1], ["col2", 1], ["diag1", 1], ["diag2", 1]],
        5: [["row2", 2], ["col3", 1]],
        6: [["row3", 0], ["col1", 2], ["diag2", 2]],
        7: [["row3", 1], ["col2", 2]],
        8: [["row3", 2], ["col3", 2], ["diag1", 2]],
    };
    const playArray = gridMap[index];
    playArray.forEach((subArray) => {
        const colRowDiag = subArray[0];
        const index = subArray[1];
        playTurn[colRowDiag][index] = player;
    });
    newGame = playTurn;
}

//UI Logic

let newGame = new WinConditionBoard([null, null, null], [null, null, null], [null, null, null], [null, null, null], [null, null, null], [null, null, null], [null, null, null], [null, null, null]);

function takeTurn(e) {
    e.preventDefault();
    document.getElementById("winner").innerText = ""
    const playedSquare = e.target.id;
    if (playedSquare !== "played") {
    const currentPlayer = document.getElementById("XorO").value;
    document.getElementById(playedSquare).append(currentPlayer);
    moveInput(newGame, playedSquare, currentPlayer);
    document.getElementById(playedSquare).setAttribute("id", "played")
    }
    const winState = newGame.winCheck();
    if (winState === "Xwin") {
    document.getElementById("winner").append("X Wins!");
    } else if (winState === "Owin") {
        document.getElementById("winner").append("O Wins!");
    }
}

window.addEventListener("load", function() {
    document.querySelector("table#gameBoard").addEventListener("click", takeTurn);
});