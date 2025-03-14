function Gameboard() {
    const rows = 3;
    const col = 3;
    const board = [];
    const gameBoard = document.querySelector(".board");
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        const boardRow = document.createElement("div");
        boardRow.classList.add("rows");
        gameBoard.appendChild(boardRow);
        for (let j = 0; j < col; j++) {
            board[i].push("0");
            const boardCol = document.createElement("div");
            boardCol.classList.add("cols");
            const cellBtn = document.createElement("button");
            cellBtn.classList.add("cell-btn");
            cellBtn.textContent = ""
            boardCol.appendChild(cellBtn);
            boardRow.appendChild(boardCol);
        }
    }  
    const getBoard = board;
    return {getBoard};
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



function Gameplay() {
    const playerOne = Player("Player 1");
    const playerTwo = Player("Player 2");
    let board = Gameboard();
    let currPlayer = playerOne;
    const playerTurn = document.querySelector("h1")
    playerTurn.textContent = `${currPlayer.name}'s turn!`
    const switchPlayer = () => {
        if (currPlayer === playerOne) {
            currPlayer = playerTwo;
            playerTurn.textContent = `${currPlayer.name}'s turn!`
        }
        else {
            currPlayer = playerOne;
            playerTurn.textContent = `${currPlayer.name}'s turn!`
        }
    }
    
    const winner = document.querySelector(".winner");
    const cellBtn = document.querySelectorAll(".cell-btn");
    cellBtn.forEach(eachBtn => {
        eachBtn.addEventListener("click", () => {
            if (eachBtn.textContent === "") {
                /* if player one */
                if (currPlayer === playerOne) {
                    eachBtn.textContent = `${playerOne.marker}`;
                    /* updating board array with clicked event */
                    const boardCol = document.querySelectorAll(".cols");
                    const colArr = Array.from(boardCol);
                    for (const [index, cell] of colArr.entries()) {
                        if (cell.textContent === `${playerOne.marker}`) {
                            if (index >= 0 && index <= 2) {
                                board.getBoard[0][index] = `${playerOne.marker}`;
                            } else if (index >=3 && index <= 5) {
                                board.getBoard[1][index-3] = `${playerOne.marker}`;
                            } else {
                                board.getBoard[2][index - 6] = `${playerOne.marker}`;
                            }
                        }
                    }
                    switchPlayer();
                    if (board.getBoard[0][0] === "O" && board.getBoard[0][0] === board.getBoard[0][1] && board.getBoard[0][0] === board.getBoard[0][2]) {
                        winner.textContent = "Player One Wins!"
                        playerTurn.textContent = ""
                    } else if (board.getBoard[1][0] === "O" && board.getBoard[1][0] === board.getBoard[1][1] && board.getBoard[1][0] === board.getBoard[1][2]) {
                        winner.textContent = "Player One Wins!"
                        playerTurn.textContent = ""
                    } else if (board.getBoard[2][0] === "O" && board.getBoard[2][0] === board.getBoard[2][1] && board.getBoard[2][0] === board.getBoard[2][2]) {
                        winner.textContent = "Player One Wins!"
                        playerTurn.textContent = ""
                    } else if (board.getBoard[0][0] === "O" && board.getBoard[0][0] === board.getBoard[1][0] && board.getBoard[0][0] === board.getBoard[2][0]) {
                        winner.textContent = "Player One Wins!"
                        playerTurn.textContent = ""
                    } else if (board.getBoard[0][1] === "O" && board.getBoard[0][1] === board.getBoard[1][1] && board.getBoard[0][1] === board.getBoard[2][1]) {
                        winner.textContent = "Player One Wins!"
                        playerTurn.textContent = ""
                    } else if (board.getBoard[0][2] === "O" && board.getBoard[0][2] === board.getBoard[1][2] && board.getBoard[0][2] === board.getBoard[2][2]) {
                        winner.textContent = "Player One Wins!"
                        playerTurn.textContent = ""
                    } else if (board.getBoard[0][0] === "O" && board.getBoard[0][0] === board.getBoard[1][1] && board.getBoard[0][0] === board.getBoard[2][2]) {
                        winner.textContent = "Player One Wins!"
                        playerTurn.textContent = ""
                    } else if (board.getBoard[2][0] === "O" && board.getBoard[2][0] === board.getBoard[1][1] && board.getBoard[2][0] === board.getBoard[0][2]) {
                        winner.textContent = "Player One Wins!"
                        playerTurn.textContent = ""
                    } else if (!board.getBoard.flat().includes("0")) {
                        winner.textContent = "It is a draw!"
                        playerTurn.textContent = ""
                    }
                    
                }
                /* if player two */
                else {
                    eachBtn.textContent = `${playerTwo.marker}`;
                    /* updating board array with clicked event */
                    const boardCol = document.querySelectorAll(".cols");
                    const colArr = Array.from(boardCol);
                    for (const [index, cell] of colArr.entries()) {
                        if (cell.textContent === `${playerTwo.marker}`) {
                            if (index >= 0 && index <= 2) {
                                board.getBoard[0][index] = `${playerTwo.marker}`;
                            } else if (index >=3 && index <= 5) {
                                board.getBoard[1][index-3] = `${playerTwo.marker}`;
                            } else {
                                board.getBoard[2][index - 6] = `${playerTwo.marker}`;
                            }
                        }
                    }
                    switchPlayer();
                    if (board.getBoard[0][0] === "X" && board.getBoard[0][0] === board.getBoard[0][1] && board.getBoard[0][0] === board.getBoard[0][2]) {
                        winner.textContent = "Player Two Wins!"
                        playerTurn.textContent = ""
                    } else if (board.getBoard[1][0] === "X" && board.getBoard[1][0] === board.getBoard[1][1] && board.getBoard[1][0] === board.getBoard[1][2]) {
                        winner.textContent = "Player Two Wins!"
                        playerTurn.textContent = ""
                    } else if (board.getBoard[2][0] === "X" && board.getBoard[2][0] === board.getBoard[2][1] && board.getBoard[2][0] === board.getBoard[2][2]) {
                        winner.textContent = "Player Two Wins!"
                        playerTurn.textContent = ""
                    } else if (board.getBoard[0][0] === "X" && board.getBoard[0][0] === board.getBoard[1][0] && board.getBoard[0][0] === board.getBoard[2][0]) {
                        winner.textContent = "Player Two Wins!"
                        playerTurn.textContent = ""
                    } else if (board.getBoard[0][1] === "X" && board.getBoard[0][1] === board.getBoard[1][1] && board.getBoard[0][1] === board.getBoard[2][1]) {
                        winner.textContent = "Player Two Wins!"
                        playerTurn.textContent = ""
                    } else if (board.getBoard[0][2] === "X" && board.getBoard[0][2] === board.getBoard[1][2] && board.getBoard[0][2] === board.getBoard[2][2]) {
                        winner.textContent = "Player Two Wins!"
                        playerTurn.textContent = ""
                    } else if (board.getBoard[0][0] === "X" && board.getBoard[0][0] === board.getBoard[1][1] && board.getBoard[0][0] === board.getBoard[2][2]) {
                        winner.textContent = "Player Two Wins!"
                        playerTurn.textContent = ""
                    } else if (board.getBoard[2][0] === "X" && board.getBoard[2][0] === board.getBoard[1][1] && board.getBoard[2][0] === board.getBoard[0][2]) {
                        winner.textContent = "Player Two Wins!"
                        playerTurn.textContent = ""
                    } else if (!board.getBoard.flat().includes("0")) {
                        winner.textContent = "It is a draw!"
                        playerTurn.textContent = ""
                    }
                }
            }
        })
    })
}

const newGame = document.querySelector(".start")
newGame.addEventListener("click", () => {
    const gameBoard = document.querySelector(".board");
    while (gameBoard.firstChild) {
        gameBoard.removeChild(gameBoard.firstChild);
    }
    Gameplay();
})

