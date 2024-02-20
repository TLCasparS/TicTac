alert("tic tac toe")


const makeBoard = (function(){
    let board = [];

    for (let i = 0; i < 3; i++) {
        let row = [];
        for (let j = 0; j < 3; j++) {
            row.push(0);
        }
        board.push(row);
    }

    return function() {
        return board 
    };
})();



function createPlayer(name, symbol){
    let score = 0;
    symbol = symbol[0]

    const giveScore = () => score;
    const scored = () => score++;

    return { name, symbol, giveScore, scored}
}


function gameOn(board){
    // gucke ob noch platz im board
    let emptyCell = 0;

    for (let row of board){
        for(let cell of row){
            if (cell == 0){
                emptyCell++;
                console.log(emptyCell)
            }
        }
    }
    if (emptyCell >= 1){
        return true
    } else{
        return false
    }
   

}

function showBoard(board){
    // console log done everytime a player sets a ticker
    console.log("The bored looks like this;")
    console.log(board)

}

function checkWinner(board){
    // soll iterieren und schauen wo die symbole sitzen
    //gibt mehrere Gewinnmöglichkeiten
   

    //horizontal
    for(let i = 0; i<3; i++){
        if(board[i][0] === board[i][1]  && board[i][0] == board[i][2]){
            if(board[i][0] != 0){
                console.log("Winner is " + board[i][0]);
                return false;
                break;
            }
    }
    // Vertical
    for (let i = 0; i < 3; i++) {
        if (board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
            if(board[0][i] != 0){
                console.log("Winner is " + board[0][i]);
                return false;
                break;
            }
        }
    }

    // Diagonal
    if ((board[0][0] === board[1][1] && board[0][0] === board[2][2]) ||
        (board[0][2] === board[1][1] && board[0][2] === board[2][0])) {
            if(board[1][1] != 0){
                console.log("Winner is " + board[1][1]);
                return false;
                break;
                
            }
       
    }

    // No winner
    return true;
}
}

// gameloop
// as long as noone one or lost the game is going on

//each round 
// player 1 picks where to place his symbol
// check if place is free
//  if not repeat to ask player 1
// if free put in array
// show game board
// check for winners or gameboard full

// player 2 turn 
// player 2 picks where to place his symbol
// check if place is free
//  if not repeat to ask player 2
// if free put in array
// show game board
// check for winners or gameboard full

// 



gameBoard = makeBoard();


p1 = createPlayer("Jean", "J")
p2 = createPlayer("Caspar", "C")

let inGame =gameOn(gameBoard)

while(inGame){
    showBoard(gameBoard)
    if(!gameOn(gameBoard)){
        break
    }
    console.log("It's "+ p1.name+"'s turn")
    let p1Row = prompt("pick a row to place your tick Row 1 to Row 3") -1
    let p1Col = prompt("pick a row to place your tick Column 1 to Column 3") -1
    gameBoard[p1Row][p1Col] = p1.symbol

    showBoard(gameBoard)
    console.log(checkWinner(gameBoard))
    if(!checkWinner(gameBoard)){
        break
    }

    if(!gameOn(gameBoard)){
        break
    }

    console.log("It's "+ p2.name+"'s turn")
    let p2Row = prompt("pick a row to place your tick Row 1 to Row 3") -1
    let p2Col = prompt("pick a row to place your tick Column 1 to Column 3") -1
    gameBoard[p2Row][p2Col] = p2.symbol
    
    console.log(checkWinner(gameBoard))
    inGame = checkWinner(gameBoard)
}
console.log("Game over")
console.log(checkWinner(gameBoard))