# Tic-Tac-Toe

A JS Web Game by Henry Oberholtzer & Noah Kise

### Test Driven Development

#### Describe Toggle

Test: It will create a function that returns an X;
Code: toggle();
Expected Result: X;

Test: Toggle will return an O the next time it is called;
Code: toggle();
Expected Results: X, O;

#### Describe WinConditionBoard();

Test: Initializes a WinConditionBoard object from a prototype;
Code: const newGame = new WinConditionBoard();
Expected Result: 

newGame = {
    row1: [null, null, null],
    row2: [null, null, null],
    row3: [null, null, null],
    col1: [null, null, null],
    col2: [null, null, null],
    col3: [null, null, null],
    diag1: [null, null, null],
    diag2: [null, null, null],
}

#### Describe moveInput.prototype.moveInput(location, player);

Test: It will create a function that takes a board index as an argument and changes the value of an element of an array.
Code: moveInput(0);
Expected Results: [0, null, null]

Test: moveInput() will change an element of an array at a specific point.
Code: moveInput(2);
Expected Results: [null, null, 2]

Test: It will change an element of an array at a specific point to a specific value;
Code: moveInput("X", 2);
Expected Result: [null, null, "X"]

Test: It will assign a 0-8 number to rows, columns and diagonals in the WinConditionBoard type object. The locations are derived from a 3x3 grid.

Example 3x3 grid:
[0 = row1, col1, diag1], [1 = row1, col2], [2 = row1, col3, diag2];
[3 = row2, col1], [4 = row2, col2, diag1, diag2], [5 = row2, col3];
[6 = row3, col1, diag2],[7 = row3, col2], [8 = rol3, col3, diag1];

Code: movieInput("X", 2)
Expected action: Addresses row1, col3, and diag2 in a WinConditionBoard;

Test: It will change the value of multiple array elements based in input number value;
Code: moveInput("X", 2);
Expected Result: {
    row1: [null, null, "X"],
    row2: [null, null, null],
    row3: [null, null, null],
    col1: [null, null, null],
    col2: [null, null, null],
    col3: ["X", null, null],
    diag1: [null, null, null],
    diag2: ["X", null, null],
}

#### Describe WinConditionBoard.prototype.winCheck();

Test: It will check if any property of a WinConditionBoard has three matching values ("X" or "O"), if so returns true;
Code: newGame.winCheck();
Expected Result: true;

Test: winCheck() will return which value ("X" or "O") is included in the passing key value array.
Code: newGame.winCheck();
Expected Result: true, "X"

#### Describe takeTurn()

Test: It will create a function that first retrieves the value of the toggle.
Code: takeTurn();
Expected Result: "X";

Test: takeTurn will accept a value from 0-8 and return the value and a value of the toggle.
Code: takeTurn(3)
Expected Result: 3, "X";

Test: takeTurn will pass the value from 0-8 and the value of toggle to moveInput(location, player);
Code: takeTurn(5)
Expected Action: moveInput(5, "O");

Test: takeTurn will call winCheck on the game object
Code: takeTurn(5)
Expected Action: newGame.winCheck();

Test: If winCheck returns true, take turn returns winner value;
Code: takeTurn(7);
Expected result: "X"

Test: If winCheck returns false, calls toggle, no return to user;
Code: takeTurn(7);
Expected result: toggle() changes

### Test Driven Development for Day 2

#### Describe canCPUWin?

Test: It returns an object of each value array of newGame that contains an "O".
Code: canCPUWin(newGame) (CPU has played in space 1)
Expected Result: { col2: ['O', null, null], row1: ['X', 'O', null] }

Test: It returns an object of each value array of newGame that contains 2 "O"s and null.
Code: canCPUWin(newGame) (CPU has played in spaces 3 and 4, while user has played in spaces 0, 1, and 6)
Expected Result: { row2: ['O', 'O', null] }

Test: It will return an array of possible winning moves, where each element is structured as such: [key, index of (value === null)]
Code: canCPUWin(newGame) (CPU has played in spaces 3 and 4, while user has played in spaces 0, 1, and 6)
Expected Result: [["row2", 2]]