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
    if (emptyCell <= 9){
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
gameOn(gameBoard)

p1 = createPlayer("Jean", "J")
p2 = createPlayer("Caspar", "C")
showBoard(gameBoard)