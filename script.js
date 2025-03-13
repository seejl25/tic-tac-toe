function Gameboard() {
    const rows = 3;
    const col = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < col; j++) {
            board[i].push("0");
        }
    }
    const getBoard = board;  
}

function Player(name, marker) {
    if (name === "Player 1") {
        marker = "O";
    } 
    else {
        marker = "X";
    }
    return {name, marker}
}

const playerOne = Player("Player 1");
const playerTwo = Player("Player 2");





