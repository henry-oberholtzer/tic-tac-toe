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

function BoardSpaces(num0, num1, num2, num3, num4, num5, num6, num7, num8) {
    this.num0 = num0;
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.num4 = num4;
    this.num5 = num5;
    this.num6 = num6;
    this.num7 = num7;
    this.num8 = num8;
}

WinConditionBoard.prototype.winCheck = function () {
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
        1: [["row1", 1], ["col2", 0]],
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
    removeSquare(availableSquares, index);
    newGame = playTurn;
}

function removeSquare(object, index) {
    const toDelete = "num" + index
    delete object[toDelete]
}

function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

function robotMove(squares) {
    const maxInt = Object.values(squares).length;
    console.log(maxInt);
    const moveIndex = randomNumber(maxInt);
    const moveChoice = Object.values(squares)[moveIndex]
    takeTurnAll(moveChoice);
}

//UI Logic

let newGame = new WinConditionBoard([null, null, null], [null, null, null], [null, null, null], [null, null, null], [null, null, null], [null, null, null], [null, null, null], [null, null, null]);
let availableSquares = new BoardSpaces(0, 1, 2, 3, 4, 5, 6, 7, 8);

function takeTurnUser(e) {
    e.preventDefault();
    document.getElementById("winner").innerText = ""
    const playedSquare = e.target.id;
    takeTurnAll(playedSquare);
}

function takeTurnAll(playedSquare) {
    console.log(playedSquare);
    let currentPlayer = document.getElementById("XorO").value;
    if (playedSquare !== "played") {
        document.getElementById(playedSquare).append(currentPlayer);
        moveInput(newGame, playedSquare, currentPlayer);
        document.getElementById(playedSquare).setAttribute("id", "played")
        if (currentPlayer === "X") {
            document.getElementById("O").setAttribute("selected", "true");
            document.getElementById("X").removeAttribute("selected");
            robotMove(availableSquares);

        } else if (currentPlayer === "O") {
            document.getElementById("X").setAttribute("selected", "true");
            document.getElementById("O").removeAttribute("selected");
        }
    }
    const winState = newGame.winCheck();
    if (winState === "Xwin") {
        document.getElementById("winner").append("X Wins!");
        document.getElementById("guy").removeAttribute("class");
    } else if (winState === "Owin") {
        document.getElementById("winner").append("O Wins!");
        document.getElementById("guy").removeAttribute("class");
    }
}

window.addEventListener("load", function () {
    document.querySelector("table#gameBoard").addEventListener("click", takeTurnUser);
});